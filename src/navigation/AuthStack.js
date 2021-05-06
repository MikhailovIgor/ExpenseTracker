import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import LoginScreen from '../screens/LoginScreen';
import AuthScreen from '../screens/AuthScreen';

const AuthStack = props => {
  return (
    <Stack.Navigator initialRouteName="Log In">
      <Stack.Screen
        name="Log In"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Sign Up"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default AuthStack;
