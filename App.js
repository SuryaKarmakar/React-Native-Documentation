import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Routes from './src/resource/routes';

const App = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {Routes.map(item => (
          <Stack.Screen {...item} />
        ))}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
