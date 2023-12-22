import React from 'react';
import {BottomNavigation} from './BottomBar';
import CardDetails from '../Onboard/CardDetails';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../SignUp/LoginScreen';

const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, unmountOnBlur: true}}
      initialRouteName="BottomNavigation">
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="CardDetails" component={CardDetails} />
    </Stack.Navigator>
  );
};

export default MainStack;
