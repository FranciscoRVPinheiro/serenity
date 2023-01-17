import React from 'react';
import {View, StyleSheet} from 'react-native';
import Header from './components/Header'
import GetRandomQuote from './components/GetRadomQuote'

export default function YourApp() {

  return (

    <View
      style={styles.container}>
      <Header />  
      <GetRandomQuote />
    </View>

  )
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
         backgroundColor: '#0b0f24',
  }
})
