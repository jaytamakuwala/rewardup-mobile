import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import Colors from '../constant/colors';
import CTTextInput from '../component/CTTextInput';
import SplashScreen from 'react-native-splash-screen';
import {checkEmail, checkPassword} from '../Utils/validations';
import {loginApi} from '../services/SecurityApis';
import {saveUser} from '../redux/actions/userActions';
import {useDispatch} from 'react-redux';

const {height, width} = Dimensions.get('window');

export default function LoginScreen({navigation}) {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  const dispatch = useDispatch();
  const [email, setEmail] = useState('jaystamakuwala@123');
  const [password, setPassword] = useState('12345678');
  const [error, setError] = useState({
    email: '',
    password: '',
  });

  const validate = () => {
    let isValid = true;
    let temp = {...error};
    if (email?.length > 0) {
      // if (!checkEmail(email)) {
      //   temp.email = 'Please enter valid email!';
      //   isValid = false;
      // }
    } else {
      temp.email = 'Please enter your email!';
      isValid = false;
    }

    if (!checkPassword(password)) {
      temp.password = 'Please enter valid password!';
      isValid = false;
    }

    if (isValid) {
      setError({email: '', password: '', mobileNo: ''});
      loginApi({
        email: email,
        password: password,
      })
        .then(async response => {
          saveUser(response);
          dispatch(saveUser(response));
        })
        .catch(err => {
          console.log('err :>> ', err);
        });
      // navigation.navigate('BottomNavigation');
    } else {
      setError(temp);
    }
  };
  return (
    <ScrollView
      style={{flexGrow: 1, backgroundColor: '#EBEAEF'}}
      keyboardShouldPersistTaps="always">
      <View style={{flex: 1}}>
        <View style={{marginTop: height * 0.2, marginHorizontal: 20}}>
          <Text style={{fontSize: 35, fontWeight: 'bold', color: Colors.black}}>
            Welcome Back
          </Text>
          <Text style={{fontSize: 20, fontWeight: '500'}}>
            Sign in to your account.
          </Text>
        </View>
        <View style={{marginTop: height * 0.03, marginHorizontal: 20}}>
          <CTTextInput
            fieldName={'Email'}
            onChangeText={setEmail}
            error={error.email}
            value={email}
            keyboardType={'email-address'}
          />

          <CTTextInput
            fieldName={'Password'}
            onChangeText={setPassword}
            error={error.password}
            value={password}
            secureTextEntry
            maxLength={10}
            mainViewStyle={{marginTop: 30}}
          />
        </View>

        <TouchableOpacity style={styles.loginBtn} onPress={validate}>
          <Text style={{fontSize: 20, fontWeight: '800', color: Colors.black}}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  loginBtn: {
    marginTop: 20,
    borderRadius: 20,
    paddingVertical: 15,
    alignSelf: 'center',
    paddingHorizontal: 35,
    backgroundColor: '#FF9A7D',
  },
});
