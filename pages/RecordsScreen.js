import React, { useState, useEffect } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import * as SQLite from 'expo-sqlite';
import { useFocusEffect } from '@react-navigation/native';

const dbPromise = SQLite.openDatabaseAsync('events.db');

const RecordsScreen = ({ navigation }) => {
    const [events, setEvents] = useState([]);

    // Función para obtener los eventos de la base de datos
    const fetchEvents = async () => {
        try {
            const db = await dbPromise;
            const allEvents = await db.getAllAsync('SELECT * FROM events');
            setEvents(allEvents);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    };

    // Refrescar la lista cada vez que la pantalla recibe el foco
    useFocusEffect(
        React.useCallback(() => {
            fetchEvents();
        }, [])
    );

    // Renderizar cada evento en la lista
    const renderItem = ({ item }) => (
        <TouchableOpacity
            style={styles.item}
            onPress={() => navigation.navigate('EventDetails', { event: item })}
        >
            <Text style={styles.title}>{item.eventTitle}</Text>
            <Text style={styles.description}>
                {item.eventDescription.length > 50
                    ? `${item.eventDescription.substring(0, 50)}...`
                    : item.eventDescription}
            </Text>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Registros de Eventos</Text>
            <FlatList
                data={events}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
                contentContainerStyle={styles.list}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#6200ee',
    },
    list: {
        paddingBottom: 20,
    },
    item: {
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    description: {
        fontSize: 14,
        color: '#666',
        marginTop: 8,
    },
});

export default RecordsScreen;