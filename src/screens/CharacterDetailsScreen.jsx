import React from 'react'
import { Image, SafeAreaView } from 'react-native';
import { Divider, Icon, Layout, Text, TopNavigation } from '@ui-kitten/components';
import ArrowBack from '../components/ArrowBack';

const CharacterDetailsScreen = ({ route }) => {
    const { name, image } = route.params.data
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <TopNavigation title='StackNavigation' alignment='center' accessoryLeft={ArrowBack}/>
            <Divider/>
            <Layout style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text category='h1' style={{ marginBottom: 15, textAlign: 'center' }}>{ name }</Text>
                <Image source = {{uri: image}} style={{ width: 300, height: 300 }}/>
            </Layout>
        </SafeAreaView>
    )
}

export default CharacterDetailsScreen