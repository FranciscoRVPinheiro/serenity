import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';


export default function GetRandomQuote(){

  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')

  async function getQuote() {

    try {
        const response = await axios.get('https://stoicquotesapi.com/v1/api/quotes/random')
        setQuote(response.data.body)
        setAuthor(response.data.author)
    } catch (error) {
        console.error(error)
    }
  }

  // To load a quote when the app opens
  useEffect(() => {
    getQuote()
  }, [""]);

  return (
    <>
        <TouchableOpacity style={styles.container} onPress={getQuote}> 
          <Text style={styles.textQuote}>{quote}</Text>
          <Text style={styles.textAuthor}>{author}</Text>
        </TouchableOpacity>
    </>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
  },  
  textQuote: {
        color:'#ffffffde',
        padding: 10,
        fontSize: 20,
        textAlign:'center',
        fontStyle: 'italic',
        fontFamily: 'sans-serif-thin',

  },      
  textAuthor: {
       color:'#ffffffde',
        padding: 10,
        fontWeight: 'bold',
        fontSize: 16,
        fontFamily: 'serif'
  }
})