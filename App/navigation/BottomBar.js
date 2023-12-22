import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import OnboardingScreen from '../Onboard/OnboardingScreen';
import Profile from '../Onboard/Profile';
import CustomTabBar from '../component/CustomTabBar';
import LoyaltyScreen from '../Onboard/LoyaltyCardScreen';

const Tab = createBottomTabNavigator();

export function BottomNavigation() {
  return (
    <Tab.Navigator
      initialRouteName="OnboardingScreen"
      screenOptions={{headerShown: false, tabBarHideOnKeyboard: true}}
      tabBar={props => <CustomTabBar {...props} />}>
      <Tab.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Tab.Screen name="LoyaltyScreen" component={LoyaltyScreen} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
