import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';
import {InsideLogo} from '../../components/';

const Home = ({navigation}) => {
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
        <Text>Body</Text>
      </View>
    </View>
  );
};

export default Home;

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
    marginRight: 100,
  },
  headerLeft: {
    marginRight: -140,
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
});
