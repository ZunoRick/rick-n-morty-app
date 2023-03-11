import React from 'react';
import { SafeAreaView } from 'react-native';
import { Button, Divider, Layout, Text, TopNavigation } from '@ui-kitten/components';
import { MenuToggler } from '../components/MenuToggler';

export const HomeScreen = ({ navigation }) => {
  const navigateDetails = () => {
    navigation.navigate('Details');
  };  

  return (
    <>
      <SafeAreaView />
      <TopNavigation 
        title='Stack Navigation' 
        alignment='center'
        accessoryLeft={<MenuToggler/>}
      />
      <Divider/>
      <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Button onPress={navigateDetails}>OPEN DETAILS</Button>
      </Layout>
    </>
  );
};