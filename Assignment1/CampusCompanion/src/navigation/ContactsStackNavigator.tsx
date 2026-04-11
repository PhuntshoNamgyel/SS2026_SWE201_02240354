import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ContactsScreen from '../screens/ContactsScreen';
import ContactDetailScreen from '../screens/ContactDetailScreen';
import { Contact } from '../data/data';

// Define the types for the screens in this stack
export type ContactsStackParamList = {
  ContactsList: undefined;
  ContactDetail: { contact: Contact };
};

const Stack = createNativeStackNavigator<ContactsStackParamList>();

export default function ContactsStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#3b0764' },
        headerTintColor: '#f5a623',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      {/* Contacts list screen */}
      <Stack.Screen
        name="ContactsList"
        component={ContactsScreen}
        options={{ title: 'Contacts' }}
      />
      {/* Contact detail screen, shown when a contact is tapped */}
      <Stack.Screen
        name="ContactDetail"
        component={ContactDetailScreen}
        options={{ title: 'Contact Details' }}
      />
    </Stack.Navigator>
  );
}