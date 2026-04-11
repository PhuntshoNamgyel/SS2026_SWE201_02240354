import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import NoticeBoardScreen from '../screens/NoticeBoardScreen';
import ContactsStackNavigator from './ContactsStackNavigator';

const Tab = createBottomTabNavigator();

function tabIcon(emoji: string) {
  return <Text style={{ fontSize: 20 }}>{emoji}</Text>;
}

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#f5a623',
        tabBarInactiveTintColor: '#a78bfa',
        tabBarStyle: {
          backgroundColor: '#3b0764',
          paddingBottom: 5,
          height: 60,
          borderTopWidth: 0,
          elevation: 10,
          shadowColor: '#3b0764',
          shadowOpacity: 0.3,
          shadowRadius: 10,
          shadowOffset: { width: 0, height: -4 },
        },
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: 'bold',
        },
        headerStyle: { backgroundColor: '#3b0764' },
        headerTintColor: '#f5a623',
        headerTitleStyle: { fontWeight: 'bold' },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => tabIcon('🏠'), title: 'Home' }}
      />
      <Tab.Screen
        name="Contacts"
        component={ContactsStackNavigator}
        options={{
          tabBarIcon: () => tabIcon('📞'),
          title: 'Contacts',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{ tabBarIcon: () => tabIcon('📅'), title: 'Schedule' }}
      />
      <Tab.Screen
        name="NoticeBoard"
        component={NoticeBoardScreen}
        options={{ tabBarIcon: () => tabIcon('📋'), title: 'Notice Board' }}
      />
    </Tab.Navigator>
  );
}