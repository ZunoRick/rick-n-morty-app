import React from 'react'
import { TopNavigationAction } from '@ui-kitten/components'
import { useNavigation } from '@react-navigation/native'
import { MenuOutlineIcon } from './icons'

const MenuToggler = () => {
    const navigation = useNavigation()
    const onToggleMenu = () => {
        navigation.toggleDrawer()
    }
    return (
        <TopNavigationAction icon={MenuOutlineIcon} onPress={onToggleMenu} />
    )
}
export { MenuToggler }