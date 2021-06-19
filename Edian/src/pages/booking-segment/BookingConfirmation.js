import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const BookingConfirmation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.conf}>
        <View style={styles.txtContainer}>
          <Text style={styles.txt}>Please confirm your reservation</Text>
          <Text style={styles.txt}>Booking Fee is not refundable</Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn1}
            onPress={() => navigation.navigate('BookingRecipe')}>
            <Text>Proceed</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.btn2}
            onPress={() => navigation.goBack()}>
            <Text>Go Back</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default BookingConfirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    justifyContent: 'center',
  },
  conf: {
    backgroundColor: '#FFFFFF',
    width: 240,
    height: 120,
    alignSelf: 'center',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 30,
  },
  txt: {
    marginVertical: 5,
    textAlign: 'center',
  },
  btnContainer: {
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignSelf: 'center',
  },
  btn1: {
    marginRight: 10,
    backgroundColor: '#F29F05',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
  btn2: {
    marginLeft: 10,
    backgroundColor: '#9FA5A1',
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
