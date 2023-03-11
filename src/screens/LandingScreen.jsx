import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Divider, Layout, TopNavigation } from '@ui-kitten/components';
import { MenuToggler } from '../components/MenuToggler';
import constants from "../util/constants"
import { setCharacters } from '../actions/actions';
import CardsList from '../components/CardsList';

const LandingScreen = ({ navigation }) => {
  const dispatch = useDispatch()
  const characters = useSelector((store) => store.characters.list )

  const getCharacters = async () =>{
    const resource = `${constants.api.BASE}/character/?page=1`
    const response = await fetch(resource)
    const data = await response.json()
    dispatch( setCharacters(data) )
  }

  useEffect(() => {
    getCharacters()
  }, [])

  const onPressDetalle = (item) =>{
    navigation.navigate('CharacterDetailsScreen', { data: item})
  }
  
  return (
    <Layout style={{ flex: 1 }}>
      <SafeAreaView />
      <TopNavigation 
        title='Tab1' 
        alignment='center'
        accessoryLeft={<MenuToggler/>}
      />
      <Divider/>
      <Layout>
        <CardsList 
          data={characters}
          onPressDetalle={onPressDetalle}
        />
      </Layout>
    </Layout>
  )
}

export default LandingScreen