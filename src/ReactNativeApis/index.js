import React from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {RouteReactNativeApis} from '../routes';

const ReactNativeApis = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      {RouteReactNativeApis?.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          onPress={() => navigation.navigate(item.name)}
          style={Styles.labelContainer}>
          <Text style={Styles.textStyle}>{item.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default ReactNativeApis;

const Styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingTop: 20,
  },
  labelContainer: {
    width: '100%',
    height: 50,
    backgroundColor: '#E0E0E0',
    borderRadius: 6,
    justifyContent: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textStyle: {
    fontSize: 18,
  },
});
