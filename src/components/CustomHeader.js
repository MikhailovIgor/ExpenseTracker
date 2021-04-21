import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, Platform} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const CustomHeader = ({title, navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.2,
          paddingStart: 10,
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <MaterialCommunityIcons name="menu" color="#1ACAD7" size={40} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 0.6,
          justifyContent: 'center',
        }}>
        <Text style={styles.titleStyle}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: Platform.OS === 'ios' ? 80 : 50,
    paddingTop: Platform.OS === 'ios' ? 30 : 0,
    borderBottomWidth: 1,
    borderBottomColor: '#226691',
    backgroundColor: '#1f1f53',
  },
  titleStyle: {
    textAlign: 'center',
    fontSize: 26,
    fontFamily: 'Nunito-Regular',
    color: '#226691',
  },
});

export default CustomHeader;
