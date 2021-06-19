import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';

export class InsideLogo extends Component {
  render() {
    return (
      <View>
        <Text style={styles.Logo}>E.D.I.A.N.</Text>
      </View>
    );
  }
}

export default InsideLogo;

const styles = StyleSheet.create({
  Logo: {
    fontFamily: 'Montserrat',
    color: '#FFFFFF',
    width: 80,
    fontSize: 19,
  },
});
