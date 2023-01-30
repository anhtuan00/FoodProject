import {View, Text, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {BottomAppBarNavigator, StackNavigator} from './common/Navigator';

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
      {/* <BottomAppBarNavigator /> */}
    </NavigationContainer>
  );
}
