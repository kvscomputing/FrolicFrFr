import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Event } from "../Classes/Event";
import {StyleSheet, TouchableOpacity, Text, View, Button, Alert} from 'react-native';

export default function MyEvents( { navigation } ) {
    return (
        <View style={styles.container}>
        const exampleEvent = Event("Volleyball", "Wanna play a quick match of volleyball at Farillaga?", 
        2, 10, "2:10 PM", "Arjun Jain");

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10,
    },
    titleText: {
      fontFamily: 'Times New Roman',
      fontSize: 30,
      marginBottom: 40,
    }
});
