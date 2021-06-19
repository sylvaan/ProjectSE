import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {InsideLogo} from '../../components';

const BookingRecipe = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerMid}>
          <InsideLogo />
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>Thank you</Text>
          <Text style={styles.headerText}>For Booking a Place at</Text>
          <Text style={styles.headerText}>McE</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.midText}>
            Your booking ID is APTX4869. Please be advised to verify your
            reservation once you have arrived in the restaurant. Another
            verification via QR Code will be needed at the table to start
            ordering.
          </Text>
        </View>
        <TouchableOpacity
          style={styles.scanBtn}
          onPress={() => navigation.navigate('QRCodeVerif')}>
          <Text style={styles.btnText}>Scan QR Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingRecipe;

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
  headerContent: {
    marginVertical: 20,
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 5,
  },
  midText: {
    marginVertical: 50,
    textAlign: 'center',
  },
  scanBtn: {
    marginTop: 60,
    backgroundColor: '#F2CB05',
    paddingHorizontal: 35,
    paddingVertical: 10,
    borderRadius: 20,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
