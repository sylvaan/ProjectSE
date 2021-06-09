import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Signup = ({navigation}) => {
  const onPressSignup = () => {
    navigation.navigate('Login');
  };
  const onPressBack = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>Start</Text>
      <TouchableOpacity onPress={onPressSignup}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onPressBack}>
        <Text>Back</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({});
