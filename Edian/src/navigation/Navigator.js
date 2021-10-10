import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  Start,
  Login,
  Signup,
  Home,
  RestoDetail,  
  BookingHistory,
  Promo,
  BookingConfirmation,
  BookingRecipe,
  QRCodeVerif,
  OrderHome,
  Order,
  Wallet,
  MenuDetails,
  ConfirmOrder,
  OrderRecipe,
  ConfirmCheckout,
  Checkout
} from '../pages';

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Signup" component={Signup} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="RestoDetail" component={RestoDetail} />
      <Stack.Screen name="BookingHistory" component={BookingHistory} />
      <Stack.Screen name="Promo" component={Promo} />
      <Stack.Screen
        name="BookingConfirmation"
        component={BookingConfirmation}
      />
      <Stack.Screen name="BookingRecipe" component={BookingRecipe} />
      <Stack.Screen name="QRCodeVerif" component={QRCodeVerif} />
      <Stack.Screen name="OrderHome" component={OrderHome} />
      <Stack.Screen name="Order" component={Order} />
      <Stack.Screen name="Wallet" component={Wallet} />
      <Stack.Screen name="MenuDetails" component={MenuDetails} />
      <Stack.Screen name="ConfirmOrder" component={ConfirmOrder} />
      <Stack.Screen name="OrderRecipe" component={OrderRecipe} />
      <Stack.Screen name="ConfirmCheckout" component={ConfirmCheckout} />
      <Stack.Screen name="Checkout" component={Checkout} />
    </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigator;
