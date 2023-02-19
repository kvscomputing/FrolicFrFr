import React from 'react';
import {StyleSheet, TouchableOpacity, Text, View, Button, Alert} from 'react-native';
import Profile from '../Classes/Profile'

const Profile = (you) => {
    return (
        <View>
            <View>
            <Text style={styles.titleText}>
                My Profile
            </Text>
        </View>
        <View>
            <Text style={styles.bodyText}>
                Name: 
            </Text>
        </View>
        </View>
    );
};

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
export default Profile;