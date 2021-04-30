import React from 'react';
import {StyleSheet, TouchableOpacity, Text, SafeAreaView} from 'react-native';
// import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useNavigation} from '@react-navigation/native';

import TabBg from '../assets/svg/TabBg';

const TabBarAddButton = ({bgColor, ...props}) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container} pointerEvents="box-none">
      <TabBg color={bgColor} style={styles.background} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Add')}>
        {/* <MaterialCommunityIcons name="plus" style={styles.buttonIcon} /> */}
        <Text style={{color: '#f6f7eb', fontSize: 30, paddingBottom: 4}}>
          +
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    alignItems: 'center',
    width: 75,
  },
  background: {
    position: 'absolute',
    top: 0,
  },
  button: {
    top: -22.5,
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: '#1acad7',
  },
  buttonIcon: {
    fontSize: 30,
    color: '#f6f7eb',
  },
});

export default TabBarAddButton;
