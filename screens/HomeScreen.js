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
      backgroundColor: '#FFFFFF'
    },
    image: {
        marginBottom: 20,
        width: 135,
        height: 120,
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