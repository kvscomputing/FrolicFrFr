import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Alert, Image} from 'react-native';
import Profile from '../Classes/Profile'

export default function MyProfile() {
  return (
        <View style={{backgroundColor = 'white', height: '100%'}}>
          <View
              style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginTop: 20,
                  marginLeft: 10,
              }}>
                <Image
                    style={{
                      height: 60,
                      width: 60,
                      backgroundColor: 'grey',
                      borderRadius: 50,
                    }}
                    source={require()}
                 />
              </View>
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


/**
 * const Profile = () => {
    return (
        <View>
            <View>
            <Text style={styles.titleText}>
                My Profile
            </Text>
        </View>
        <View>
            <View>
            <Text style={styles.bodyText}>
                Name: 
            </Text>
            <Text style={styles.bodyText}>
                Username:
            </Text>
            </View>
        </View>
        </View>
    );
};
 * @returns 
 */

/** 
export default function Profile( {you} ) {
    return (
        <View>
            <Text style={styles.titleText}>
                My Profile
            </Text>
        </View>
    );
}


const styles = StyleSheet.create({
    titleText: {
        fontFamily: 'Times New Roman',
        fontSize: 20,
        justifyContent: center
    },
    bodyText: {
        fontFamily: 'Times New Roman',
        fontSize: 20,
        justifyContent: center
    }
});
*/