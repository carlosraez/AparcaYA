import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { AvaibleParks } from '../screens/AvaibleParks';
import { FormAvaiblePark } from '../screens/FormAvaiblePark';

const Stack = createStackNavigator();

export const Navigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#fff',
        },
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="FormAvaiblePark" component={FormAvaiblePark} />
      <Stack.Screen name="AvaibleParks" component={AvaibleParks} />
    </Stack.Navigator>
  );
};
