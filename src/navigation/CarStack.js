import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import CarScreen from '../screens/CarScreen';
import DetailsScreen from '../screens/DetailsScreen';
import FuelScreen from '../screens/FuelScreen';

const CarStack = props => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Car Expenses"
        component={CarScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Details"
        component={DetailsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Fuel"
        component={FuelScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CarStack;
