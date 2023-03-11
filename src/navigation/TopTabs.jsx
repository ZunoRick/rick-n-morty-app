import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { TabBar, Tab, TopNavigation, Divider } from '@ui-kitten/components';
import { ContactosScreen } from '../screens/ContactosScreen';
import ChatsScreen from '../screens/ChatsScreen';
import NotificacionesScreen from '../screens/NotificacionesScreen';
import { MenuToggler } from '../components/MenuToggler';

const TopTab = createMaterialTopTabNavigator();

const TopTabBar = ({ navigation, state }) => (
  <TabBar
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}>
    <Tab title='Contactos'/>
    <Tab title='Chats'/>
    <Tab title='Notificaciones'/>
  </TabBar>
);

const TopTabs = () => {
  return (
    <>
      <TopNavigation 
        title='TopTabNavigator' 
        alignment='center'
        accessoryLeft={<MenuToggler/>}
      />
      <Divider/>
      <TopTab.Navigator
        tabBar={props => <TopTabBar {...props} />}
        screenOptions={{
          
        }}
      >
        <TopTab.Screen name="Contactos" component={ContactosScreen}/>
        <TopTab.Screen name="Chats" component={ChatsScreen}/>
        <TopTab.Screen name="Notificaciones" component={NotificacionesScreen}/>
      </TopTab.Navigator>
    </>
  )
}

export default TopTabs