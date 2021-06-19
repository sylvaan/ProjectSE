import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const Resto = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.upper}>
        <View style={styles.menuImg}>
          <Text>Menu</Text>
        </View>
      </View>
      <View style={styles.menuname}>
        <Text>Egg Muffin</Text>
      </View>
      <View style={styles.menuprice}>
        <Text>Rp. 25000</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.viewBtn} onPress={() => onPress()}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
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
    height: 150,
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
  menuImg: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    width: 90,
    height: 60,
    borderColor: '#000000',
    borderRadius: 3,
  },
  menuname: {
    alignSelf: 'flex-start',
    paddingLeft: 10,
  },
  menuprice: {
    alignSelf: 'flex-end',
    paddingRight: 10,
  },
  viewBtn: {
    paddingHorizontal: 35,
    paddingVertical: 2,
    backgroundColor: '#F29F05',
    borderRadius: 8,
    marginRight: 5,
  },
  btnText: {
    color: '#FFFFFF',
  },
});
