import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Start = ({navigation}) => {
  return (
    <View>
      <Text>Start</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
        <Text>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({});
