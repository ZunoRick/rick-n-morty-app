import React from 'react'
import { View } from 'react-native'
import { Avatar, Card, Layout, StyleService, Text } from '@ui-kitten/components'
import { TouchableOpacity } from 'react-native-gesture-handler'

const CharacterCard = ({
        data = {},
        onPressDetalle= () =>{}
    }) => {
    let status = 'basic'
    if (data.status == 'Alive') {
        status = 'success'
    }else if(data.status == 'Dead'){
        status = 'danger'
    }

    const renderItemHeader = (headerProps, item) => (
        <View {...headerProps}>
            <Text style={ styles.headerCard } category='h6'>
                {item.name}
            </Text>
        </View>
    );
    
    const renderItemFooter = (footerProps, item) => (
        <Text {...footerProps}> { item.gender } </Text>
    );
    return (
        <TouchableOpacity
            onPress={() => onPressDetalle(data)}
        >
            <Card
                style={styles.item}
                status={status}
                header={headerProps => renderItemHeader(headerProps, data)}
                footer={headerProps => renderItemFooter(headerProps, data) }
            >
            
                <Layout 
                    style={ styles.bodyCard }
                >
                    <Avatar source = {{ uri: `${data.image}`}} size='giant'/>
                    <Text>{ data.status }</Text>
                    <Text>{ data.species }</Text>
                </Layout>
            </Card> 
        </TouchableOpacity>
    )
}

const styles = StyleService.create({
    container: {
        flex: 1
    },
    headerCard: {
        textAlign: 'center'
    },
    bodyCard: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    item: {
        margin: 10,
    },
})
export default CharacterCard