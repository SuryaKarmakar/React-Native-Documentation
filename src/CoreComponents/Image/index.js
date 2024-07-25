import React from 'react';
import {Image, StyleSheet} from 'react-native';

const ImageCC = () => {
  return (
    <>
      <Image
        style={styles.image}
        source={{
          uri: 'https://legacy.reactjs.org/logo-og.png',
        }}
      />
    </>
  );
};

export default ImageCC;

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
  },
});
