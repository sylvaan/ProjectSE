import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {InsideLogo} from '../../components/';

const BookingHistory = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerMid}>
          <InsideLogo />
        </View>
        <View style={styles.headerLeft}>
          <TouchableOpacity onPress={() => navigation.replace('Start')}>
            <Image
              style={styles.logoutImg}
              source={require('../../assets/SignOut.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.body}>
        <TouchableOpacity style={styles.x} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/Xbutton.png')} />
        </TouchableOpacity>
        <View style={styles.headerContent}>
          <Text style={styles.headerText}>McE</Text>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.restoImg}>
            <Text>Resto</Text>
          </View>
          <View style={styles.restoImg}>
            <Text>Resto</Text>
          </View>
        </View>
        <View style={styles.imgContainer}>
          <View style={styles.restoImg}>
            <Text>Resto</Text>
          </View>
          <View style={styles.restoImg}>
            <Text>Resto</Text>
          </View>
        </View>
        <View style={styles.midContainer}>
          <View style={styles.upmidContent}>
            <Text>3 kms away</Text>
            <Text>5 tables left</Text>
          </View>
          <View style={styles.lowmidContent}>
            <Text>Food prices around Rp. 40.000</Text>
          </View>
        </View>
        <View style={styles.lowContainer}>
          <View style={styles.lowContent}>
            <Text>Number of Guests: 1 Guest</Text>
            <Text>Booking Fee: Rp. 5000 per Guest</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.bookBtn} onPress={() => navigation.navigate('BookingConfirmation')}>
          <Text style={styles.btnTitle}>Book</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BookingHistory;

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: '#404040',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 26,
  },
  headerMid: {
    marginRight: 120,
  },
  headerLeft: {
    marginRight: -160,
    marginTop: -20,
  },
  logoutImg: {
    height: 35,
    width: 25,
  },
  container: {
    flex: 1,
    backgroundColor: '#F25C05',
  },
  body: {
    marginVertical: 20,
    backgroundColor: '#D4D4D4',
    height: '80%',
    width: '80%',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 25,
  },
  x: {
    alignSelf: 'flex-start',
    marginLeft: 5,
  },
  headerContent: {
    marginBottom: 10,
  },
  headerText: {
    fontSize: 20,
    alignSelf: 'center',
  },
  imgContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  restoImg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 50,
    height: 50,
    borderColor: '#000000',
    backgroundColor: '#FFFFFF',
    borderRadius: 3,
    marginHorizontal: 50,
    marginVertical: 20,
  },
  midContainer: {
    marginVertical: 20,
  },
  upmidContent: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  lowContainer: {
    marginVertical: 20,
  },
  lowContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookBtn: {
    backgroundColor: '#F29F05',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
  },
  btnTitle: {
    color: '#FFFFFF',
  }
});
