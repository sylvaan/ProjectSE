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
          <Text style={styles.headerText}>Guest</Text>
          <Text style={styles.headerText}>Promo</Text>
        </View>
        <View style={styles.midContent}>
          <Text style={styles.midText}>No Promo yet</Text>
        </View>
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
  midText: {
    fontStyle: 'italic',
  },
});
