import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Image, TouchableOpacity, Text, View, Button, Alert} from 'react-native';

export default function HomeScreen( { navigation }) {
    return (
        <View
            style={styles.container}>
                <Image style={styles.image} source={require("/Users/kvseetharaman/frolic/images/Image.png")}/> 
                <Text style={styles.titleText}>
                    Frolic
                </Text>
                <Button style = {styles.button}
                title = "Sign In"
                onPress={() => navigation.navigate("SignIn")}
                />
                <Button style = {styles.button}
                title = "Sign Up"
                onPress={() => navigation.navigate("SignUp")}
                />
            </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#000000'
    },
    image: {
        marginBottom: 20,
        width: 260,
        height: 240,
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10,
    },
    titleText: {
      fontFamily: 'Cochin',
      fontSize: 40,
      color: '#FFFFFF',
      marginBottom: 40,
    }
});