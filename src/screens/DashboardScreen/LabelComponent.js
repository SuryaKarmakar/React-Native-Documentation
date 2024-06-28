import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import Styles from './styles';

const LabelComponent = props => {
  const {onPress, LabelTitle} = props;

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={Styles.LabelView}>
      <Text style={Styles.textStyle}>{LabelTitle}</Text>
    </TouchableOpacity>
  );
};

export default LabelComponent;
