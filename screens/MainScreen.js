import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../atoms/Button';

const MainScreen = ({navigation}) => {
  return (
    <View style={styles.wrapper}>
      <Button
        text={'Добавить устройство'}
        onPress={() => {
          navigation.navigate('ListScreen');
        }}
      />
      <Button
        text={'Управлять устройствами'}
        onPress={() => {
          navigation.navigate('ListScreen');
        }}
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
});

export default MainScreen;
