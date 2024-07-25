import React from 'react';
import {ActivityIndicator} from 'react-native';

const ActivityIndicatorCC = () => {
  return (
    <>
      {/* basic indicator */}
      <ActivityIndicator />

      {/* small size */}
      <ActivityIndicator size="small" />

      {/* large size */}
      <ActivityIndicator size="large" />

      {/* size with color */}
      <ActivityIndicator size="large" color="#00ff00" />
    </>
  );
};

export default ActivityIndicatorCC;
