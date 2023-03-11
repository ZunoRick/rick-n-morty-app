import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import LandingScreen from '../screens/LandingScreen';
import CharacterDetailsScreen from '../screens/CharacterDetailsScreen';

const { Navigator, Screen } = createStackNavigator();

const StackCharacters = () => {
  return (
    <Navigator screenOptions={{ headerShown : false }}>
      <Screen name='Landing' component={LandingScreen} />
      <Screen name='CharacterDetailsScreen' component={CharacterDetailsScreen} />
    </Navigator>
  )
}

export default StackCharacters