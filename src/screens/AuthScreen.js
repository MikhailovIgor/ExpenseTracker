import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Input, Button} from 'react-native-elements';
import {Formik} from 'formik';
import * as Yup from 'yup';
import {useDispatch, useSelector} from 'react-redux';

import {logIn, signUp} from '../redux/actions/authActions';

const AuthScreen = () => {
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
              title={formType ? 'Sign In' : 'Log in'}
              type="solid"
              onPress={handleSubmit}
              // loading={loading}
              titleStyle={styles.buttonTitleStyle}
              buttonStyle={styles.buttonStyle}
              containerStyle={{width: '87%'}}
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
    backgroundColor: 'rgba(39, 43, 107, 0.7)',
  },
  headerText: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Nunito-Regular',
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
    width: '90%',
  },
});

export default AuthScreen;
