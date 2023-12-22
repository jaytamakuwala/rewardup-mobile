import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import Colors from '../constant/colors';

export default function CTTextInput({
  fieldName,
  value,
  onChangeText,
  error,
  mainViewStyle,
  style,
  keyboardType = 'default',
  maxLength,
  secureTextEntry = false,
}) {
  return (
    <View style={{...mainViewStyle}}>
      <Text style={{fontSize: 20, fontWeight: '500', color: Colors.black}}>
        {fieldName}
      </Text>
      <TextInput
        placeholder={fieldName}
        style={{...styles.textInput, ...style}}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        maxLength={maxLength}
      />
      {error ? <Text style={{color: Colors.Red}}>{error}</Text> : null}
    </View>
  );
}
const styles = StyleSheet.create({
  textInput: {
    backgroundColor: Colors.White,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
});
