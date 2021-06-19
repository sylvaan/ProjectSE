import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Resto = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.restoImg}>
          <Text>Resto</Text>
        </View>
        <View style={styles.restodetail}>
          <Text>3 kms away</Text>
          <Text>5 tables left</Text>
          <Text>$$$</Text>
        </View>
      </View>
      <View style={styles.lower}>
        <View style={styles.restoinfo}>
          <Text>McE</Text>
          <Text>Fast Food</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.bookBtn} onPress={() => onPress()}>
            <Text style={styles.btnText}>Book</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Resto;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 170,
    height: 120,
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 25,
    padding: 2,
    marginHorizontal: 5,
  },
  upper: {
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
    borderRadius: 3,
  },
  restodetail: {
    marginLeft: 5,
  },
  lower: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bookBtn: {
    paddingHorizontal: 5,
    paddingVertical: 2,
    backgroundColor: '#F25C05',
    borderRadius: 8,
    marginRight: 5,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
