import React from 'react'
import { Drawer, DrawerItem, IndexPath, Layout, Text, Divider } from '@ui-kitten/components';
import { PersonIcon, CloseIcon } from '../components/icons';

const DrawerMenu = ({ navigation, state }) => {
  return (
    <>
      <Layout>
        <Text>App Test</Text>
      </Layout>
      <Divider/>
      <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={index => navigation.navigate(state.routeNames[index.row])}
      >
        <DrawerItem title='Tabs' />
        <DrawerItem title='Settings' />
      </Drawer>
    </>
  )
}

export {DrawerMenu}