import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';

const CustomButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={{
        ...styles.buttonContainer,
        width: props.width,
      }}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#4ab6be',
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#e6f5f6',
    fontSize: 20,
  },
});

export default CustomButton;
