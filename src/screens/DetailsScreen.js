import React from 'react';
import {View, Text, ImageBackground, StyleSheet, Button} from 'react-native';

import CustomHeader from '../components/CustomHeader';

const image = require('../assets/images/mainBackground.jpeg');

const DetailsScreen = props => {
  return (
    <ImageBackground source={image} style={styles.imageStyle}>
      <CustomHeader title="Details" navigation={props.navigation} />
      <View style={styles.container}>
        <Text style={styles.textStyle}>Details Screen</Text>
      </View>
    </ImageBackground>
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
});

export default DetailsScreen;
