import React from 'react';
import {Text, StyleSheet} from 'react-native';

export default function Header() {
    return (
        <Text style={styles.header}>Serenity</Text>
    )
}

const styles = StyleSheet.create({
    header: {
        textAlign: 'center',
        color: 'white',
        marginTop: 35,
        fontSize: 28,
        fontFamily: 'sans-serif-thin',
        paddingTop: 10 

    }
})