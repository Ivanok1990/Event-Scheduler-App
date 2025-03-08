import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';

const EventDetailsScreen = ({ route }) => {
    const { event } = route.params;

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.card}>
                <Text style={styles.title}>{event.eventTitle}</Text>
                <Text style={styles.description}>{event.eventDescription}</Text>
                <View style={styles.detailsContainer}>
                    <Text style={styles.detail}>Fecha: {event.eventDate}</Text>
                    <Text style={styles.detail}>Organizador: {event.organizerName}</Text>
                    <Text style={styles.detail}>Email: {event.organizerEmail}</Text>
                    <Text style={styles.detail}>Teléfono: {event.organizerPhone}</Text>
                </View>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding: 16,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#6200ee',
        marginBottom: 16,
    },
    description: {
        fontSize: 16,
        color: '#333',
        marginBottom: 20,
    },
    detailsContainer: {
        borderTopWidth: 1,
        borderTopColor: '#eee',
        paddingTop: 16,
    },
    detail: {
        fontSize: 14,
        color: '#666',
        marginBottom: 8,
    },
});

export default EventDetailsScreen;