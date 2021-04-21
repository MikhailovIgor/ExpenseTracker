import React from 'react';
import {View, StyleSheet, Platform} from 'react-native';
import {
  createBottomTabNavigator,
  BottomTabBar,
} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MealsScreen from '../screens/MealsScreen';
import CarStack from '../navigation/CarStack';
import BillsScreen from '../screens/BillsScreen';
import AddExpenseScreen from '../screens/AddExpenseScreen';
import OtherExpensesScreen from '../screens/OtherExpensesScreen';
import TabBarAddButton from '../components/TabBarAddButton';

const activeTintColor = '#1acad7';
const inActiveTintColor = '#226691';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Add"
      tabBar={props => (
        <View style={styles.navigationContainer}>
          <BottomTabBar {...props} />
          {Platform.OS === 'ios' && <View style={styles.iosFillLine} />}
        </View>
      )}
      tabBarOptions={{
        showIcon: true,
        style: styles.navigator,
        tabStyle: {
          backgroundColor: '#1f1f53',
        },
        activeTintColor: activeTintColor,
        labelStyle: {fontSize: 14},
      }}>
      <Tab.Screen
        name="Meals"
        component={MealsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="food-variant"
              size={26}
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Car"
        component={CarStack}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="car-cog"
              size={26}
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={AddExpenseScreen}
        options={{
          tabBarButton: props => (
            <TabBarAddButton bgColor="#1f1f53" {...props} />
          ),
        }}
      />
      <Tab.Screen
        name="Bills"
        component={BillsScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="text-box-multiple-outline"
              size={26}
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Other"
        component={OtherExpensesScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={26}
              color={focused ? activeTintColor : inActiveTintColor}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  navigationContainer: {
    position: 'absolute',
    paddingTop: Platform.OS === 'android' ? 50 : 0,
    bottom: 0,
    left: 0,
    right: 0,
    shadowColor: '#fff',
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8.3,
  },
  navigator: {
    borderTopWidth: 0,
    backgroundColor: 'transparent',
    elevation: 30,
  },
  iosFillLine: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 34,
    backgroundColor: '#1f1f53',
  },
});

export default BottomTabNavigator;
