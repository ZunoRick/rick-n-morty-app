import React from 'react'
import { Divider, List } from '@ui-kitten/components';
import CharacterCard from './CharacterCard'
import ListEmpty from './ListEmpty'

const CardsList = ({ 
        data = [],
        onPressDetalle = () => {}
    }) => {
    const renderItem = ({ item, index }) => ( 
        <CharacterCard 
            data={item}
            onPressDetalle = {onPressDetalle}
        />
    );

    return (
        <List
            // horizontal
            data={data}
            renderItem={renderItem}
            ItemSeparatorComponent={Divider}
            showsHorizontalScrollIndicator={false}
        />
    )
}

export default CardsList