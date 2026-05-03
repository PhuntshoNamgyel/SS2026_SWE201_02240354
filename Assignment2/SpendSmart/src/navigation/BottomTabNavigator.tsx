import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import AnimationDemoScreen from '../screens/AnimationDemoScreen';
import CategoryStackNavigator from './CategoryStackNavigator';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: any;
          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Categories') iconName = 'list-outline';
          else if (route.name === 'Profile') iconName = 'person-outline';
          else if (route.name === 'AnimationDemo') iconName = 'sparkles-outline';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90D9',
        tabBarInactiveTintColor: '#aaa',
        tabBarStyle: { paddingBottom: 5, height: 60 },
        headerStyle: { backgroundColor: '#4A90D9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'SpendSmart' }} />

      {/* Categories uses a stack navigator inside so we can drill down to ExpenseDetail */}
      <Tab.Screen name="Categories" component={CategoryStackNavigator} options={{ headerShown: false }} />

      <Tab.Screen name="AnimationDemo" component={AnimationDemoScreen} options={{ title: 'Animations' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
    </Tab.Navigator>
  );
}