import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ScrollView,
} from 'react-native';
import {InsideLogo, Resto} from '../../components/';

const Home = ({navigation}) => {
  const clickResto = () => {
    navigation.navigate('RestoDetail');
  }

  const toBookHistory = () => {
    navigation.navigate('BookingHistory')
  }

  const toPromo = () => {
    navigation.navigate('Promo')
  }
  
  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
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
          <View style={styles.upperBody}>
            <View style={styles.accountContainer}>
              <Image source={require('../../assets/AccountLogo.png')} />
              <View style={styles.accountTextWrapper}>
                <Text>Hello, </Text>
                <Text style={styles.act}>Guest</Text>
              </View>
            </View>
            <View style={styles.submenu}>
              <TouchableOpacity style={styles.subsub} onPress={toBookHistory}>
                <Text>Your Booking History</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.subsub} onPress={toPromo}>
                <Text>Your Promo</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.midBody}>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Recommended Restaurants</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
              </ScrollView>
            </View>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Nearby Restaurants</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
              </ScrollView>
            </View>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Hot Deals</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
                <Resto onPress={clickResto} />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  upperBody: {
    alignItems: 'center',
  },
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
    marginTop: 20,
  },
  accountContainer: {
    alignSelf: 'center',
    backgroundColor: '#F29F05',
    borderRadius: 35,
    width: 250,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  accountTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  submenu: {
    marginVertical: 10,
    display: 'flex',
    flexDirection: 'row',
  },
  subsub: {
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 3,
    backgroundColor: '#F29F05',
    borderRadius: 25,
  },
  horiz: {
    marginVertical: 20,
  },
  horizTitle: {
    marginVertical: 10,
    alignSelf: 'center',
    marginBottom: 20,
    color: '#FFFFFF',
  },
});
