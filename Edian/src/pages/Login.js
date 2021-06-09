import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Login = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>Start</Text>
      <TouchableOpacity onPress={onPressLogin}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBack}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
