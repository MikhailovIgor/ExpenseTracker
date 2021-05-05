/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React from 'react';
import {useSelector} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

import DrawerNavigator from './navigation/DrawerNavigator';
import AuthScreen from './screens/AuthScreen';

const App = () => {
  const auth = useSelector(state => state.auth.isAuth);

  return (
    <NavigationContainer>
      {auth ? <DrawerNavigator /> : <AuthScreen />}
    </NavigationContainer>
  );
};

export default App;
