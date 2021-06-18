import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Start, Login, Signup, Home} from '../pages';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default Navigator;
