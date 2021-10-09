import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Image,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={require('../../assets/Edianlogo.png')} />
      </View>
      <View style={styles.inputContainer}>
        <View style={styles.input}>
          <TextInput style={styles.ti} type="name" placeholder="Your name" />
        </View>
        <View style={styles.input}>
          <TextInput style={styles.ti} type="password" placeholder="Password" />
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Home')}>
          <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <Text>Back</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#404040',
    alignItems: 'center',
    fontFamily: 'Montserrat',
  },
  logoContainer: {
    marginTop: 70,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    marginVertical: 10,
    paddingHorizontal: 60,
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
  },
  buttonContainer: {
    top: 30,
  },
  button: {
    marginVertical: 15,
    paddingVertical: 15,
    paddingHorizontal: 80,
    borderRadius: 25,
    backgroundColor: '#F29F05',
  },
});
