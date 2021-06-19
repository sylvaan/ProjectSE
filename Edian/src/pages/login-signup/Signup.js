import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';

const Signup = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
        <View>
          <TextInput />
        </View>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    fontFamily: 'Montserrat',
},});
