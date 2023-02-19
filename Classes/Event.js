import React from 'react';
import {StyleSheet, View} from 'react-native';

export default class Event {
    constructor(title, description, numPeople, 
        maxPeople, time, initiator) {
            this.title = title;
            this.description = description;
            this.numPeople = numPeople;
            this.maxPeople = maxPeople;
            this.time = time;
            this.initiator = initiator;
    }

    render() {
        return (
            <View>
            </View>
        );
    }
}

const styles = StyleSheet.create({

});