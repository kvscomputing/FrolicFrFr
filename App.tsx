import React from "react";
import HomeScreen from "./screens/HomeScreen";
import SignIn from "./screens/SignIn";
import SignUp from "./screens/SignUp";
import AllEvents from "./screens/AllEvents";
import {StyleSheet, TouchableOpacity, Text, View, Button, Alert} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name="Home"
        component={HomeScreen}        
        />
        <Stack.Screen
        name="SignIn"
        component={SignIn}        
        />
        <Stack.Screen
        name="SignUp"
        component={SignUp}        
        />
        <Stack.Screen
        name="AllEvents"
        component={AllEvents}        
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


/**
 class App extends Component {
  state = {
    count: 0,
  };

  onPress = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>
          Frolic
        </Text>
        <Button title = "Create Account"
        onPress = {() => Alert.alert("What's up")}
        />
        <Button title = "Sign In"
        onPress = {() => Alert.alert("ayeeeee")}
        />
      </View>
    );
  }
}

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
    fontSize: 20
  }
});

export default App;
 */