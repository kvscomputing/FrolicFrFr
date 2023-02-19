import React from 'react';

export default class Profile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    friends: string[];
    constructor(firstName: string, lastName: string, email: string, 
        phone: string, friends: string[]) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.friends = friends;
    }

    addFriend(newFriend: string) : void {
        var length;
        length = this.friends.push(newFriend);
    }
}