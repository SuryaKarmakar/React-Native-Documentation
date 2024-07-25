import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';

const FlatListCC = () => {
  const getItem = index => {
    const data = [];

    for (let i = 0; i < index; i++) {
      data.push({
        id: Math.random().toString(12).substring(0),
        title: `Item ${i}`,
      });
    }
    return data;
  };

  const Item = ({title}) => {
    return (
      <View style={styles.item}>
        <Text style={styles.title}>{title}</Text>
      </View>
    );
  };

  return (
    <>
      <FlatList
        data={getItem(100)}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default FlatListCC;

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    height: 150,
    justifyContent: 'center',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 20,
  },
  title: {
    fontSize: 32,
  },
});
