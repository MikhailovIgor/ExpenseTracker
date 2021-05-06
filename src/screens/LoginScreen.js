import React, {useState} from 'react';
import {View, StyleSheet, Text, KeyboardAvoidingView} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {signIn} from '../redux/actions/authActions';

const LoginScreen = ({navigation}) => {
  const [secureEntry, setSecureEntry] = useState(true);
  const [formType, setFormType] = useState(true);
  const [loading, setLoading] = useState(false);

  const errorFromAuthState = useSelector(state => state.auth.error);
  const dispatch = useDispatch();

  const initialValues = {name: '', email: '', password: ''};

  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('The email is required'),
    password: Yup.string()
      .max(20, 'must be 20 or less')
      .required('The password is required'),
  });

  const handleSubmit = (values, {resetForm}) => {
    setLoading(true);
    if (formType) {
      dispatch(signIn(values));
      resetForm(initialValues);
      setLoading(false);
    } else {
      //sign In
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Log In</Text>
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
              title={'Log in'}
              type="solid"
              onPress={handleSubmit}
              loading={loading}
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={{width: '87%', alignSelf: 'center'}}
            />
          </KeyboardAvoidingView>
        )}
      </Formik>
      <View style={{flex: 0.2, justifyContent: 'center'}}>
        <Text style={{color: '#4AB6BE', fontSize: 20, alignSelf: 'center'}}>
          Don't have an account yet?
        </Text>
        <Button
          title="Touch here to Sign in "
          type="clear"
          onPress={() => navigation.navigate('Sign Up')}
          titleStyle={styles.signinButtonTitleStyle}
          containerStyle={{borderBottomColor: '#fff', borderBottomWidth: 1}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(39, 43, 107, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 38,
    fontFamily: 'Montserrat',
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
  buttonTitleStyle: {
    color: '#fff',
    width: '100%',
    fontSize: 22,
    fontFamily: 'Montserrat',
  },
  buttonStyle: {
    backgroundColor: '#4AB6BE',
    borderRadius: 10,
  },
  signinButtonTitleStyle: {
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat',
  },
});

export default LoginScreen;
