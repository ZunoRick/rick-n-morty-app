import React, { Component } from 'react'
import { Image, StyleSheet, ActivityIndicator, Appearance } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

color = Appearance.getColorScheme()

class SplashScreen extends Component {
    theme = require('../app/theme.json')
    source = require('../../assets/img/logo.png')
    render(){
        return (
            <SafeAreaView style={styles.container}>
                <Image
                    source={this.source}
                />
                <ActivityIndicator 
                    style= { styles.indicator }
                    color= { this.theme['color-primary-500'] }
                    size= 'large'
                />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
        backgroundColor : {color},
    },
    indicator : {
        paddingTop: 15
    }
})
export default SplashScreen