import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { BottomNavigation, BottomNavigationTab, Text} from '@ui-kitten/components';

import { StackNavigation } from './StackNavigation';
import { PersonIcon, EmailIcon, MenuIcon } from '../components/icons';
import TopTabs from './TopTabs';
import StackCharacters from './StackCharacters';

const BottomTabs = createBottomTabNavigator();

const BottomTabBar = ({ navigation, state }) => (
  <BottomNavigation
    selectedIndex={state.index}
    onSelect={index => navigation.navigate(state.routeNames[index])}
  >
    <BottomNavigationTab title={evaProps => <Text {...evaProps}>TAB1</Text>} icon={PersonIcon}/>
    <BottomNavigationTab title='TAB2' icon={EmailIcon}/>
    <BottomNavigationTab title='Stack' icon={MenuIcon}/>
  </BottomNavigation>
);

export const Tabs = () => (
  <BottomTabs.Navigator 
    tabBar={props => <BottomTabBar {...props} />}
    screenOptions={{ headerShown : false }}
  >
    <BottomTabs.Screen name='StackCharacters' component={StackCharacters}/>
    <BottomTabs.Screen name='TopTabs' component={TopTabs}/>
    <BottomTabs.Screen name='StackNavigation' component={StackNavigation}/>
  </BottomTabs.Navigator>
);