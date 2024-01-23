/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/Router';
import {GluestackUIProvider} from '@gluestack-ui/themed';
import {config} from '@gluestack-ui/config';

function App(): JSX.Element {
  return (
    <GluestackUIProvider
      config={{
        dependencies: {
          'linear-gradient': require('react-native-linear-gradient').default,
        },
        config,
      }}>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </GluestackUIProvider>
  );
}

export default App;
