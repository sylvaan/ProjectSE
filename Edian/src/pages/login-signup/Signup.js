import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View>
      <Text>Signup</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
