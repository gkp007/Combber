import {View, Text} from 'react-native';
import React from 'react';
import {PrivateRoutesType} from './types';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {Private} from '../../screens';

const Stack = createSharedElementStackNavigator<PrivateRoutesType>();

type PrivateRouteProps = {
  initialRouteName?: keyof PrivateRoutesType;
};

export default function PrivateRoutes({initialRouteName}: PrivateRouteProps) {
  return (
    <Stack.Navigator
      initialRouteName={initialRouteName}
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Private.Home} />
    </Stack.Navigator>
  );
}
