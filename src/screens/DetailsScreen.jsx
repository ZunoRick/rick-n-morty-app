import React from 'react';
import { SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation, TopNavigationAction } from '@ui-kitten/components';
import ArrowBack from '../components/ArrowBack';

export const DetailsScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TopNavigation title='StackNavigation' alignment='center' accessoryLeft={ArrowBack}/>
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text category='h1'>DETAILS</Text>
      </Layout>
    </SafeAreaView>
  );
};