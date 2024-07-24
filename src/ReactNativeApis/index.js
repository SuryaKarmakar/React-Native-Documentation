import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
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
