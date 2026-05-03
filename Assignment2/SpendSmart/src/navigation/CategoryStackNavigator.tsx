import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CategoryScreen from '../screens/CategoryScreen';
import ExpenseDetailScreen from '../screens/ExpenseDetailScreen';

const Stack = createStackNavigator();

export default function CategoryStackNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: '#4A90D9' },
        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: '700' },
      }}
    >
      <Stack.Screen
        name="CategoryList"
        component={CategoryScreen}
        options={{ title: 'Categories' }}
      />
      <Stack.Screen
        name="ExpenseDetail"
        component={ExpenseDetailScreen}
        options={{ title: 'Expense Detail' }}
      />
    </Stack.Navigator>
  );
}