import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';

const CoreComponentsScreen = () => {
  const navigation = useNavigation();

  return <ScrollView style={Styles.container}></ScrollView>;
};

export default CoreComponentsScreen;
