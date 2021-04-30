import React, {useState} from 'react';
import {View, Text, StyleSheet, Input} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import CustomButton from '../components/customButton';

const AuthScreen = () => {
  // const [] = useState();
  const initialValues = {name: '', email: '', password: ''};
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'at least 2 symbols')
      .max(20, 'must be 20 or less')
      .required('The name is required'),
    email: Yup.string()
      .email('invalid email address')
      .required('The email is required'),
    password: Yup.string()
      .max(20, 'must be 20 or less')
      .required('The password is required'),
  });

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      <Formik initialValues={initialValues} validationSchema={}></Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39, 43, 107, 0.6)',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
  },
});

export default AuthScreen;
