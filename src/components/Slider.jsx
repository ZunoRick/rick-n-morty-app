import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';

const slides = [
  {
    key: 'one',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    // image: require('../assets/img/7.png'),
    backgroundColor: '#6b11e9',
  },
  {
    key: 'two',
    title: 'Title 2',
    text: 'Other cool stuff',
    // image: require('../assets/img/2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 'three',
    title: 'Title 3',
    text: 'Other cool stuff',
    backgroundColor: '#37be32',
  },
  {
    key: 'four',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    // image: require('../assets/img/4.png'),
    backgroundColor: '#22bcb5',
  }
];

const Slider = () => {
  const [done, setDone] = useState(false)

  _renderItem = ({ item }) => {
    return (
      <View style={{...styles.slide, backgroundColor: item.backgroundColor}}>
        <Text style={styles.title}>{item.title}</Text>
        { item.image 
          ? <Image source={item.image} />
          : <></>
        }
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  }

  onPressDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    setDone(true);
    console.log(done);
  }

  return (
    <AppIntroSlider 
      renderItem={_renderItem} 
      data={slides} 
      onDone={onPressDone}
      bottomButton={true}
      showSkipButton={true}
    />
  )
}

const styles = StyleSheet.create({
  slide: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  title: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold'
  }
});

export { Slider }