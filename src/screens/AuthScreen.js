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
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={}>
        {({
          handleSubmit,
          handleBlur,
          resetForm,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <>
            <Input
              placeholder="Name"
              placeholderTextColor={'#1ACAD7'}
              leftIcon={{
                type: 'material-community',
                name: 'account',
                color: '#1ACAD7',
              }}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              renderErrorMessage={errors.email && touched.email}
              errorMessage={errors.email}
              errorStyle={{color: 'red'}}
              onChangeText={handleChange('name')}
              onBlur={handleBlur('name')}
              value={values.name}
            />
            <Input
              placeholder="Email"
              placeholderTextColor={'#1ACAD7'}
              leftIcon={{
                type: 'material-community',
                name: 'email',
                color: '#1ACAD7',
              }}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              // renderErrorMessage={errors.email && touched.email}
              // errorMessage={errors.email}
              errorStyle={{color: 'red'}}
              onChangeText={handleChange('email')}
              onBlur={handleBlur('email')}
              value={values.email}
            />
            <Input
              placeholder="password"
              secureTextEntry={secureEntry}
              placeholderTextColor={'#1ACAD7'}
              leftIcon={{
                type: 'material-community',
                name: 'lock',
                color: '#1ACAD7',
              }}
              inputStyle={styles.inputStyle}
              inputContainerStyle={styles.inputContainerStyle}
              rightIcon={{
                type: 'antdesign',
                name: secureEntry ? 'eye' : 'eyeo',
                color: '#1ACAD7',
                onPress: () => setSecureEntry(!secureEntry),
              }}
              // renderErrorMessage={errors.password && touched.password}
              // errorMessage={errors.password}
              // errorStyle={{color: Colors.black}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              title={formType ? 'Register' : 'Log in'}
              type="solid"
              onPress={handleSubmit}
              loading={loading}
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
            />
          </>
        )}
      </Formik>
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
