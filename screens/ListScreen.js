import React from 'react';
import { View, FlatList, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Button from '../atoms/Button';
import {COLORS} from '../colors';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    name: 'Первый датчик',
    macAddress: '00-1F-C6-B9-29-77',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    name: 'Датчик',
    macAddress: '00-1F-C6-B9-29-79',
  },
  {
    id: '1314-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '754-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '58694a0f-251-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '58694a0f-42-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '58694a0f-532-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '23-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '3-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '4-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '32694a0f-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '53-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
  {
    id: '76-3da1-471f-bd96-145571e29d72',
    name: 'Григорий',
    macAddress: '00-1F-C6-B9-29-78',
  },
];

const Item = ({title, mac, navigation}) => (
  <TouchableOpacity
    style={styles.item}
    onPress={() => {
      navigation.navigate('ChangeScreen', {text: title});
    }}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.title}>{mac}</Text>
  </TouchableOpacity>
);

const ListScreen = ({navigation}) => {
  const renderItem = ({item}) => (
    <Item title={item.name} mac={item.macAddress} navigation={navigation} />
  );

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <FlatList
          style={styles.flat}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <Button
        text={'Назад'}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '90%',
    borderRadius: 16,
    overflow: 'hidden',
  },
  wrapper: {
    flex: 1,
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    borderRadius: 16,
    marginVertical: 8,
  },
  title: {
    fontSize: 16,
    color: COLORS.WHITE,
  },
});

export default ListScreen;
