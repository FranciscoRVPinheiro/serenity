import React from "react";
import { View, StyleSheet, Text} from "react-native"

export default function About() {
    
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Stoicism a philosophy of life that maximizes positive emotions, reduces
        negative emotions and helps individuals to hone their virtues of
        character.
      </Text>
      <Text style={styles.text}>
        At any moment, in any situation, and at any stage of life, Stoicism
        provides a framework for living well. It reminds people of what is truly
        important, providing practical strategies to get more of what is
        valuable.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b0f24",
  },
  text: {
    color: "#ffffffde",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontFamily: "sans-serif-thin",
    backgroundColor: "#0b0f24",
    lineHeight: 25,
    margin: 15,
    textAlign: "justify",
  },
});