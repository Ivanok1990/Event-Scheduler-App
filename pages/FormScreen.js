import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView, Alert } from 'react-native';
import { Button, TextInput, Text, useTheme } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import * as SQLite from 'expo-sqlite';
import DateTimePicker from '@react-native-community/datetimepicker';

const FormScreen = () => {
    const { colors } = useTheme();
    const { control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            eventTitle: '',
            eventDescription: '',
            eventDate: new Date(),
            organizerName: '',
            organizerEmail: '',
            organizerPhone: '',
        },
    });
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [db, setDb] = useState(null);


    useEffect(() => {
        const initDB = async () => {
            try {
                const database = await SQLite.openDatabaseAsync('events.db');
                setDb(database);


                await database.execAsync(`
          CREATE TABLE IF NOT EXISTS events (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            eventTitle TEXT NOT NULL,
            eventDescription TEXT NOT NULL,
            eventDate TEXT NOT NULL,
            organizerName TEXT NOT NULL,
            organizerEmail TEXT NOT NULL,
            organizerPhone TEXT NOT NULL
          );
        `);
            } catch (error) {
                console.error('Error initializing database:', error);
                Alert.alert('Error', 'Failed to initialize database.');
            }
        };

        initDB();
    }, []);


    const onSubmit = async (data) => {
        if (!db) {
            Alert.alert('Error', 'Database not initialized.');
            return;
        }

        const { eventTitle, eventDescription, organizerName, organizerEmail, organizerPhone } = data;
        const eventDate = date.toISOString().split('T')[0]; // Formatear la fecha como YYYY-MM-DD

        try {

            const result = await db.runAsync(
                'INSERT INTO events (eventTitle, eventDescription, eventDate, organizerName, organizerEmail, organizerPhone) VALUES (?, ?, ?, ?, ?, ?);',
                [eventTitle, eventDescription, eventDate, organizerName, organizerEmail, organizerPhone]
            );

            Alert.alert('Success', 'Event saved successfully!');
            console.log('Event saved with ID:', result.lastInsertRowId);
        } catch (error) {
            console.error('Error saving event:', error);
            Alert.alert('Error', 'Failed to save event.');
        }
    };


    const onChangeDate = (event, selectedDate) => {
        setShowDatePicker(false);
        if (selectedDate) {
            setDate(selectedDate);
        }
    };


    const validatePhoneNumber = (value) => {
        const phoneRegex = /^[0-9]{8}$/;
        return phoneRegex.test(value) || 'Invalid phone number';
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Crear Evento</Text>

            <Controller
                control={control}
                rules={{
                    required: 'Event Title is required',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Event Title"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.eventTitle}
                        style={styles.input}
                        mode="outlined"
                        theme={{ colors: { primary: '#6200ee', background: '#fff' } }}
                    />
                )}
                name="eventTitle"
            />
            {errors.eventTitle && <Text style={styles.errorText}>{errors.eventTitle.message}</Text>}

            <Controller
                control={control}
                rules={{
                    required: 'Event Description is required',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Event Description"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.eventDescription}
                        style={styles.input}
                        multiline
                        mode="outlined"
                        theme={{ colors: { primary: '#6200ee', background: '#fff' } }}
                    />
                )}
                name="eventDescription"
            />
            {errors.eventDescription && <Text style={styles.errorText}>{errors.eventDescription.message}</Text>}

            <View style={styles.input}>
                <Button
                    mode="contained"
                    onPress={() => setShowDatePicker(true)}
                    style={styles.dateButton}
                    labelStyle={{ color: '#fff' }}
                >
                    Select Event Date
                </Button>
                {showDatePicker && (
                    <DateTimePicker
                        value={date}
                        mode="date"
                        display="default"
                        onChange={onChangeDate}
                    />
                )}
                <Text style={styles.dateText}>Selected Date: {date.toLocaleDateString()}</Text>
            </View>
            {errors.eventDate && <Text style={styles.errorText}>{errors.eventDate.message}</Text>}

            <Controller
                control={control}
                rules={{
                    required: 'Organizer Name is required',
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Organizer Name"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.organizerName}
                        style={styles.input}
                        mode="outlined"
                        theme={{ colors: { primary: '#6200ee', background: '#fff' } }}
                    />
                )}
                name="organizerName"
            />
            {errors.organizerName && <Text style={styles.errorText}>{errors.organizerName.message}</Text>}

            <Controller
                control={control}
                rules={{
                    required: 'Organizer Email is required',
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                    },
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Organizer Email"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.organizerEmail}
                        style={styles.input}
                        keyboardType="email-address"
                        mode="outlined"
                        theme={{ colors: { primary: '#6200ee', background: '#fff' } }}
                    />
                )}
                name="organizerEmail"
            />
            {errors.organizerEmail && <Text style={styles.errorText}>{errors.organizerEmail.message}</Text>}

            <Controller
                control={control}
                rules={{
                    required: 'Organizer Phone is required',
                    validate: validatePhoneNumber,
                }}
                render={({ field: { onChange, onBlur, value } }) => (
                    <TextInput
                        label="Organizer Phone"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        error={errors.organizerPhone}
                        style={styles.input}
                        keyboardType="phone-pad"
                        mode="outlined"
                        theme={{ colors: { primary: '#6200ee', background: '#fff' } }}
                    />
                )}
                name="organizerPhone"
            />
            {errors.organizerPhone && <Text style={styles.errorText}>{errors.organizerPhone.message}</Text>}

            <Button
                mode="contained"
                onPress={handleSubmit(onSubmit)}
                style={styles.submitButton}
                labelStyle={{ color: '#fff' }}
            >
                Create Event
            </Button>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: '#f5f5f5',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#6200ee',
    },
    input: {
        marginBottom: 20,
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
        marginLeft: 10,
    },
    dateButton: {
        marginBottom: 10,
        backgroundColor: '#6200ee',
    },
    dateText: {
        textAlign: 'center',
        color: '#666',
    },
    submitButton: {
        marginTop: 20,
        backgroundColor: '#6200ee',
    },
});

export default FormScreen;