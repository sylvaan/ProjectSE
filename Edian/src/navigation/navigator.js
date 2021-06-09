import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Start from '../pages/Start';
import Login from '../pages/Login';
import Signup from '../pages/Signup';

const Stack = createStackNavigator();

const navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </Stack.Navigator>
  );
};

export default navigator;

const styles = StyleSheet.create({});
