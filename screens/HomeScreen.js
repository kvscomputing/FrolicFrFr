import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Alert} from 'react-native';

export default function HomeScreen( { navigation }) {
    return (
        <View
            style={styles.container}>
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
    },
    button: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      marginBottom: 10,
    },
    titleText: {
      fontFamily: 'Times New Roman',
      fontSize: 30
    }
});