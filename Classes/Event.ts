import React from 'react';

export default class Event {
    title: string;
    description: string;
    numPeople: number;
    maxPeople: number;
    time: string;
    initiator: string;

    constructor(title: string, description: string, numPeople: number, 
        maxPeople: number, time: string, initiator: string) {
            this.title = title;
            this.description = description;
            this.numPeople = numPeople;
            this.maxPeople = maxPeople;
            this.time = time;
            this.initiator = initiator;
    }
}