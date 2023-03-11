import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Icon, TopNavigationAction } from '@ui-kitten/components';

const BackIcon = (props) => (
  <Icon {...props} name='arrow-back' />
);

const ArrowBack = () => {
    const navigation = useNavigation()
    const navigateBack = () => {
        navigation.goBack();
    };
    return (
        <TopNavigationAction icon={BackIcon} onPress={navigateBack}/>
    )
}

export default ArrowBack