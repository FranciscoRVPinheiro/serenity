import React from 'react';
import {StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import GetRandomQuote from './components/GetRadomQuote'
import About from './components/About';

const Stack = createNativeStackNavigator();


export default function YourApp() {

  return (
    <NavigationContainer style={styles.container}>
      <Stack.Navigator
        initialRouteName="Serenity"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#0b0f24",
          },
          headerTitleStyle: {
            fontFamily: "sans-serif-thin",
          },
        }}
      >
        <Stack.Screen name="Serenity" component={GetRandomQuote} />
        <Stack.Screen name="About" component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '0f24#0b',
  }
})
