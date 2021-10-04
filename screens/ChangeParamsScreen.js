import React from 'react';
import {StyleSheet, View, TextInput, Image, Text} from 'react-native';
import Button from '../atoms/Button';
import {COLORS} from '../colors';

const ChangeParamsScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.wrapper__wrapper_input}>
        <TextInput style={styles.wrapper_input__text_input} />
        <Button
          text={'Изменить'}
          onPress={() => {
            navigation.navigate('ListScreen');
          }}
        />
      </View>
      <Button
        onPress={() => navigation.navigate('ListScreen')}
        text={'Назад'}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapper__wrapper_input: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  wrapper_input__text_input: {
    backgroundColor: COLORS.GRAY,
    width: 200,
    borderRadius: 16,
  },
});

export default ChangeParamsScreen;
