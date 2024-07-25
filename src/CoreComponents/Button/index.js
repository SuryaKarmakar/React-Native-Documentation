import React from 'react';
import {Button} from 'react-native';

const ButtonCC = () => {
  return (
    <>
      {/* basic button */}
      <Button onPress={() => console.warn('Hello')} title="Click Me" />

      {/* color props */}
      <Button
        onPress={() => console.warn('Hello')}
        title="Click Me"
        color={'red'}
      />

      {/* color props */}
      <Button disabled onPress={() => console.warn('Hello')} title="Click Me" />
    </>
  );
};

export default ButtonCC;
