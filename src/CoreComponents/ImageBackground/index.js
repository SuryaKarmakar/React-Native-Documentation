import React from 'react';
import {ImageBackground, StyleSheet, Text, View} from 'react-native';

const ImageBackgroundCC = () => {
  const image = {uri: 'https://legacy.reactjs.org/logo-og.png'};

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={styles.imageStyle}>
        <Text style={styles.text}>Inside</Text>
      </ImageBackground>
    </View>
  );
};

export default ImageBackgroundCC;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 0.6,
    justifyContent: 'center',
    resizeMode: 'cover',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
  imageStyle: {
    borderRadius: 20,
  },
});
