import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Button} from 'react-native';

import CustomHeader from '../components/CustomHeader';

const image = require('../assets/images/mainBackground.jpeg');

const FuelScreen = props => {
  return (
    <View style={{flex: 1}}>
      <ImageBackground source={image} style={styles.imageStyle}>
        <CustomHeader title="Fuel expenses" />
        <View style={styles.container}>
          <Text style={styles.textStyle}>Fuel Screen</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(30, 65, 100, 0.65)',
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: '#fff',
    fontSize: 30,
  },
  buttonsContainer: {
    flex: 0.1,
    width: '92%',
    marginTop: 15,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#226691',
    borderRadius: 26,
  },
});

export default FuelScreen;
