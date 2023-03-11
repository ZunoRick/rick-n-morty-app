import React from 'react'
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { MenuToggler } from '../components/MenuToggler';

export const SettingsScreen = () => {
  return (
    <>
      <SafeAreaView />
      <TopNavigation 
        title='SettingsScreen' 
        alignment='center'
        accessoryLeft={<MenuToggler/>}
      />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>SettingsScreen</Text>
      </Layout>
    </>
  )
}
