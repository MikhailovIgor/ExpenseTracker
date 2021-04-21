import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';

import CustomHeader from '../components/CustomHeader';
import CustomButton from '../components/customButton';

const image = require('../assets/images/mainBackground.jpeg');

const CarScreen = props => {
  return (
    <ImageBackground source={image} style={styles.imageStyle}>
      <CustomHeader title="Car Expenses" navigation={props.navigation} />
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <CustomButton
            title="FUEL"
            onPress={() => props.navigation.navigate('Fuel')}
            width={'48%'}
          />
          <CustomButton
            title="DETAILS"
            onPress={() => props.navigation.navigate('Details')}
            width={'48%'}
          />
        </View>
        <View style={styles.diagramContainer}>
          <Text style={styles.textStyle}>Fuel: 65 byn</Text>
          <Text style={styles.textStyle}>Details: 0 byn</Text>
          <Text style={styles.textStyle}>TOTAL: 65 byn</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'rgba(30, 65, 100, 0.65)',
  },
  imageStyle: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  textStyle: {
    color: '#fff',
    fontSize: 20,
  },
  buttonsContainer: {
    width: '92%',
    marginTop: 15,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#226691',
    borderRadius: 28,
  },

  diagramContainer: {
    flex: 0.8,
    marginTop: 30,
  },
});

export default CarScreen;
