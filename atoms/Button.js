import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS} from '../colors/index';
import type {ViewStyleProp} from 'react-native/Libraries/StyleSheet/StyleSheet';

export interface IButton {
  text?: string;
  onPress?: void;
  style?: ViewStyleProp;
}

const Button: React.FC<IButton> = props => {
  const {text, onPress, children, style} = props;
  return (
    <TouchableOpacity style={[styles.wrapper, {style}]} onPress={onPress}>
      <Text style={styles.wrapper__text}>{text}</Text>
      {children}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    borderRadius: 16,
    backgroundColor: COLORS.BLUE,
    padding: 12,
    marginTop: 5,
    marginBottom: 5,
    alignItems: 'center',
    width: 200,
  },
  wrapper__text: {
    color: COLORS.WHITE,
  },
});

export default Button;
