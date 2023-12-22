import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MainStack from './MainStack';
import {useSelector} from 'react-redux';
import SignInStack from './SignInStack';

export const navigationRef = React.createRef();

export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}

const ApplicationNavigator = () => {
  const user = useSelector(state => state);
  console.log('user :>> ', user);
  return (
    <NavigationContainer ref={navigationRef}>
      {user?.user?.data ? <MainStack /> : <SignInStack />}
    </NavigationContainer>
  );
};

export default ApplicationNavigator;
