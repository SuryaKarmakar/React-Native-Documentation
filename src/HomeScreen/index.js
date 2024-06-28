import React from 'react';
import {ScrollView, TouchableOpacity, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';
import Routes from '../resource/routes';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      {Routes?.slice(1)?.map((item, index) => (
        <TouchableOpacity
          key={index}
          activeOpacity={0.6}
          onPress={() => navigation.navigate(item.name)}
          style={Styles.labelContainer}>
          <Text style={Styles.textStyle}>{item?.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;
