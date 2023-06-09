import React from 'react'
import { SafeAreaView } from 'react-native';
import { Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';

const ChatsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='Tab1' alignment='center'/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>ChatsScreen</Text>
      </Layout>
    </SafeAreaView>
  )
}

export default ChatsScreen