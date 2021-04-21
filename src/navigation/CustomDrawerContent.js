import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  View,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

MaterialCommunityIcons.loadFont();

const CustomDrawerContent = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#1f1f53'}}>
      <View
        style={{
          height: 200,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={require('../assets/images/logo.png')}
          style={{width: 150, height: 150}}
        />
      </View>
      <ScrollView>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Statistics')}>
          <View style={styles.itemStyle}>
            <MaterialCommunityIcons
              name="chart-bar"
              color="#4ab6be"
              size={26}
            />
            <Text style={styles.textStyle}>Statistics</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
          <View style={styles.itemStyle}>
            <MaterialCommunityIcons name="cog" color="#4ab6be" size={26} />
            <Text style={styles.textStyle}>Settings</Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#4ab6be',
    margin: 10,
    paddingBottom: 5,
  },
  textStyle: {
    color: '#4ab6be',
    fontSize: 22,
    paddingLeft: 10,
    fontFamily: 'Antonio',
  },
});

export default CustomDrawerContent;
