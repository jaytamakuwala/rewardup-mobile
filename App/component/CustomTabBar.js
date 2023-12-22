import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {} from 'react';
import OnboardingScreen from '../Onboard/OnboardingScreen';
import LoyaltyCard from '../Onboard/LoyaltyCardScreen';
import Profile from '../Onboard/Profile';
import Colors from '../constant/colors';

export default function CustomTabBar({state, descriptors, navigation}) {
  const [tabIndex, setTabIndex] = useState(0);
  const bottomMenu = [
    {
      key: 1,
      name: 'OnboardingScreen',
      displayName: 'Offers',
      component: OnboardingScreen,
      icon: 'https://cdn-icons-png.flaticon.com/512/5530/5530758.png',
    },

    {
      key: 2,
      name: 'LoyaltyScreen',
      displayName: 'Loyalty cards',
      component: LoyaltyCard,
      icon: 'https://cdn-icons-png.flaticon.com/512/3037/3037255.png',
    },
    {
      key: 3,
      name: 'Profile',
      displayName: 'Profile',
      component: Profile,
      icon: 'https://cdn-icons-png.flaticon.com/512/1144/1144760.png',
    },
  ];

  const onPress = (item, index) => {
    setTabIndex(index);
    navigation.navigate(item?.name);
  };

  return (
    <View
      style={{
        backgroundColor: Colors.white,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 12,
        elevation: 10,
      }}>
      {bottomMenu.map((route, index) => {
        return (
          <View key={index}>
            <TouchableOpacity key={index} onPress={() => onPress(route, index)}>
              <Image
                source={{uri: route?.icon}}
                style={{
                  alignSelf: 'center',
                  height: 25,
                  width: 25,
                  tintColor: tabIndex == index ? '#759AE2' : '#848484',
                }}
              />
              <Text
                style={{
                  color: tabIndex == index ? '#759AE2' : '#848484',
                  fontSize: 14,
                }}>
                {route?.displayName}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}
