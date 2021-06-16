import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View>
      <Text>Login</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({});
