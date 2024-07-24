import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
import {RouteCoreComponents} from '../routes';

const CoreComponents = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      {RouteCoreComponents?.map((item, index) => (
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

export default CoreComponents;
