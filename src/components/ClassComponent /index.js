import React, {Component} from 'react';
import {Text, View} from 'react-native';

import Styles from './styles';

export default class ClassComponent extends Component {
  render() {
    return (
      <View style={Styles.container}>
        <Text>Class Component</Text>
      </View>
    );
  }
}
