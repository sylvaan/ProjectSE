import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import {InsideLogo, Menu} from '../../components';

const OrderHome = ({navigation}) => {
  const clickMenu = () => {
    navigation.navigate('MenuDetails');
  };

  const toOrder = () => {
    navigation.navigate('Order');
  };

  const toWallet = () => {
    navigation.navigate('Wallet');
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.headerContainer}>
          <View style={styles.headerMid}>
            <InsideLogo />
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.upperBody}>
            <View style={styles.billContainer}>
              <View style={styles.billTextWrapper}>
                <Text style={styles.act}>Your bill is </Text>
                <Text style={styles.act}>Rp. 75000 </Text>
              </View>
              <View style={styles.submenu}>
                <TouchableOpacity style={styles.subsub} onPress={toOrder}>
                  <Image
                    style={styles.subimg}
                    source={require('../../assets/OrderLogo.png')}
                  />
                  <Text style={styles.subtext}>Your Orders</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.subsub} onPress={toWallet}>
                  <Image
                    style={styles.subimg}
                    source={require('../../assets/WalletLogo.png')}
                  />
                  <Text style={styles.subtext}>Your Wallets</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={styles.midBody}>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Main Courses</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
              </ScrollView>
            </View>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Side Dishes</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
              </ScrollView>
            </View>
            <View style={styles.horiz}>
              <View>
                <Text style={styles.horizTitle}>Beverages</Text>
              </View>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}>
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
                <Menu onPress={clickMenu} />
              </ScrollView>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OrderHome;

const styles = StyleSheet.create({
  upperBody: {
    alignItems: 'center',
  },
  headerContainer: {
    backgroundColor: '#F2CB05',
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 26,
  },
  container: {
    flex: 1,
    backgroundColor: '#F25C05',
  },
  body: {
    marginTop: 20,
  },
  billContainer: {
    alignSelf: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 35,
    width: 320,
    height: 110,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  billTextWrapper: {
    display: 'flex',
    flexDirection: 'row',
  },
  act: {
    fontSize: 25,
  },
  submenu: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  subimg: {
    maxWidth: 50,
  },
  subsub: {
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 10,
  },
  subtext: {
      marginTop: 16,
    fontSize: 16,
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
