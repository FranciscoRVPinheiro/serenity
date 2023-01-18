import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Text, StyleSheet, TouchableWithoutFeedback, View, Button} from 'react-native'

export default function GetRandomQuote({ navigation }) {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  async function getQuote() {
    try {
      const response = await axios.get(
        "https://stoicquotesapi.com/v1/api/quotes/random"
      );
      setQuote(response.data.body);
      setAuthor(response.data.author);
    } catch (error) {
      console.error(error);
    }
  }

  // To load a quote when the app opens
  useEffect(() => {
    getQuote();
  }, [""]);

  return (
    <TouchableWithoutFeedback onPress={getQuote}>
      <View style={styles.container}>
        <Text style={styles.textQuote}>{quote}</Text>
        <Text style={styles.textAuthor}>{author}</Text>
        <View style={styles.button}>
          <Button
            title="About"
            color="#0b0f24"
            onPress={() => navigation.navigate("About")}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0b0f24",
  },
  textQuote: {
    color: "#ffffffde",
    padding: 10,
    fontSize: 20,
    textAlign: "center",
    fontStyle: "italic",
    fontFamily: "sans-serif-thin",
    margin: 10,
  },
  textAuthor: {
    color: "#ffffffde",
    padding: 10,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "serif",
  },
  button: {
    position: "absolute",
    bottom: "3%",
  },
});