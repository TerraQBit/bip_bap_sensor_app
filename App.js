import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import ListScreen from './screens/ListScreen';
import ChangeParamsScreen from './screens/ChangeParamsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={'Main'}
        screenOptions={{headerShown: false}}>
        <Stack.Screen name={'MainScreen'} component={MainScreen} />
        <Stack.Screen name={'ListScreen'} component={ListScreen} />
        <Stack.Screen name={'ChangeScreen'} component={ChangeParamsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
