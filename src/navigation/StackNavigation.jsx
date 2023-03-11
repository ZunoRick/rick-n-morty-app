import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { DetailsScreen } from '../screens/DetailsScreen';

const { Navigator, Screen } = createStackNavigator();

const StackNavigation = () => (
    <Navigator screenOptions={{ headerShown : false }}>
      <Screen name='Profile' component={HomeScreen} />
      <Screen name='Details' component={DetailsScreen} />
    </Navigator>
);

export { StackNavigation }
