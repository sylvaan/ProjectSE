import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {InsideLogo} from '../../components';

const QRCodeVerif = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerMid}>
          <InsideLogo />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.imgContainer}>
          <Image source={require('../../assets/QRCode.png')} />
        </View>
        <TouchableOpacity
          style={styles.scanBtn}
          onPress={() => navigation.navigate('OrderHome')}>
          <Text style={styles.btnText}>Confirm</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default QRCodeVerif;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#F25C05',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 26,
  },
  container: {
    flex: 1,
    backgroundColor: '#F2CB05',
  },
  body: {
    marginVertical: 20,
    backgroundColor: '#FFFFFF',
    height: '80%',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
  imgContainer: {
      marginTop: 60,
  },
  scanBtn: {
    marginTop: 120,
    backgroundColor: '#F29F05',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
