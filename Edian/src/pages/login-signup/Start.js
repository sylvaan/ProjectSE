import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const Start = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Edian.png')} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Signup')}>
          <Text>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Start;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  logoContainer: {
    marginTop: 120,
  },
  buttonContainer: {
    top: 100,
  },
  button: {
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    backgroundColor: '#F29F05',
  },
});
