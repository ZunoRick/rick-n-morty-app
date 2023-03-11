import React from 'react'
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';

const NotificacionesScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='NotificacionesScreen' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>NotificacionesScreen</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default NotificacionesScreen