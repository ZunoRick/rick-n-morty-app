import React from 'react'
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { DrawerMenu } from './DrawerMenu';
import { SettingsScreen } from '../screens/SettingsScreen';
import { Tabs } from './Tabs';

const { Navigator, Screen } = createDrawerNavigator()

const DrawerNavigation = () => {
  return (
    <Navigator 
      initialRouteName='Tabs' 
      drawerContent={props => <DrawerMenu {...props}/>}
      screenOptions={{ headerShown: false, drawerPosition: 'right'}}
    >
      <Screen name='Tabs' component={Tabs} />
      <Screen name='SettingsScreen' component={SettingsScreen} />
    </Navigator>
  )
}

export default DrawerNavigation