import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FormScreen from './pages/FormScreen';
import RecordsScreen from './pages/RecordsScreen';
import EventDetailsScreen from './pages/EventDetailsScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Stack Navigator para la pestaña de Records
function RecordsStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="RecordsList"
                component={RecordsScreen}
                options={{ title: 'Registros' }} // Encabezado del Stack Navigator
            />
            <Stack.Screen
                name="EventDetails"
                component={EventDetailsScreen}
                options={{ title: 'Detalles del Evento' }} // Encabezado del Stack Navigator
            />
        </Stack.Navigator>
    );
}

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color, size }) => {
                        let iconName;

                        if (route.name === 'Form') {
                            iconName = 'create-outline';
                        } else if (route.name === 'Records') {
                            iconName = 'list-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: '#6200ee',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false, // Ocultar el encabezado del Tab Navigator
                })}
            >
                <Tab.Screen
                    name="Form"
                    component={FormScreen}
                    options={{ title: 'Crear Evento' }}
                />
                <Tab.Screen
                    name="Records"
                    component={RecordsStack}
                    options={{ title: 'Registros' }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}