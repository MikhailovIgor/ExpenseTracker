import React, {useState} from 'react';
import {View, Text, StyleSheet, KeyboardAvoidingView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {logIn, signUp} from '../redux/actions/authActions';
import {NavigationContainer} from '@react-navigation/native';

const AuthScreen = ({navigation}) => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [formType, setFormType] = useState(true);
  const [loading, setLoading] = useState(false);

  const errorFromAuthState = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

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

  const handleSubmit = (values, {resetForm}) => {
    console.log(values);
    // setLoading(true);
    if (formType) {
      dispatch(signUp(values));
      resetForm(initialValues);
      // setLoading(false);
    } else {
      dispatch(logIn(values));
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Sign Up</Text>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}>
        {({
          handleSubmit,
          resetForm,
          handleBlur,
          handleChange,
          values,
          touched,
          errors,
        }) => (
          <KeyboardAvoidingView
            behavior="height"
            style={{flex: 0.7, justifyContent: 'center'}}>
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
              errorMessage={errors.name}
              errorStyle={{color: 'tomato'}}
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
              renderErrorMessage={errors.email && touched.email}
              errorMessage={errors.email}
              errorStyle={{color: 'tomato'}}
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
              renderErrorMessage={errors.password && touched.password}
              errorMessage={errors.password}
              errorStyle={{color: 'tomato'}}
              onChangeText={handleChange('password')}
              onBlur={handleBlur('password')}
              value={values.password}
            />
            <Button
              title="Register"
              type="solid"
              onPress={handleSubmit}
              // loading={loading}
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={{width: '87%'}}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Text style={{color: '#4ab6be', fontSize: 20, alignSelf: 'center'}}>
          Already registered?
        </Text>
        <Button
          title="Do the Log In by touching here"
          type="clear"
          onPress={() => navigation.navigate('Log In')}
          titleStyle={styles.loginButtonTitleStyle}
          containerStyle={{borderBottomColor: '#fff', borderBottomWidth: 1}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(39, 43, 107, 0.7)',
  },
  headerText: {
    color: '#fff',
    fontSize: 38,
    fontFamily: 'Nunito-Regular',
    flex: 0.1,
    paddingTop: 60,
  },
  inputStyle: {
    color: '#fff',
  },
  inputContainerStyle: {
    width: '90%',
    alignSelf: 'center',
  },
  buttonStyle: {
    borderRadius: 10,
    backgroundColor: '#4ab6be',
  },
  buttonTitleStyle: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Nunito-Regular',
    width: '100%',
  },
  loginButtonTitleStyle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Nunito-Regular',
  },
});

export default AuthScreen;
