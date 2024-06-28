import React from 'react';
import {ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import Styles from './styles';

import LabelComponent from './LabelComponent';

const DashboardScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={Styles.container}>
      <LabelComponent
        onPress={() => navigation.navigate('Core Components')}
        LabelTitle={'Core Components'}
      />
      <LabelComponent
        onPress={() => navigation.navigate('Apis')}
        LabelTitle={'APIs'}
      />
    </ScrollView>
  );
};

export default DashboardScreen;
