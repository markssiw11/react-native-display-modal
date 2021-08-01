import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextStyle, ViewStyle, StyleProp } from 'react-native';

export interface ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
function Button({ onPress, title, buttonStyle, textStyle }: ButtonProps) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { ...buttonStyle }]}>
      <Text style={[styles.textButton, { ...textStyle }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    backgroundColor: '#09a505',
    flex: 1,
  },
  textButton: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Button;
