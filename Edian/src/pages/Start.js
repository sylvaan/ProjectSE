import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Start = ({navigation}) => {
  const onPressLogin = () => {
    navigation.navigate('Login');
  };
  const onPressSignup = () => {
    navigation.navigate('Signup');
  };
  return (
    <View>
      <Text>Start</Text>
      <TouchableOpacity onPress={onPressLogin}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({});
