import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useState } from 'react';
import {StyleSheet, TouchableOpacity, Text, TextInput, View, Image, Button, Alert} from 'react-native';

export default function SignIn( {navigation} ) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
        <View style={styles.container}>
        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Email"
            placeholderTextColor="#003f5c"
            onChangeText={(email) => setEmail(email)}
        />
        </View>

        <View style={styles.inputView}>
            <TextInput
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            onChangeText={(password) => setPassword(password)}
        />
        </View>
        <Button style = {styles.loginBtn}
                title = "LOGIN"
                onPress={() => navigation.navigate("AllEvents")}
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
    image: {
      marginBottom: 40,
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
    },
    inputView: {
      backgroundColor: "#FFC0CB",
      borderRadius: 30,
      width: "70%",
      height: 45,
      marginBottom: 20,
      alignItems: "center",
    },
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
    },
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#FF1493",
    },
    

});
