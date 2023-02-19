import React from 'react';

export default class Profile {
    constructor(firstName, lastName, email, 
        phone, friends) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.phone = phone;
            this.friends = friends;
    }

    get name() {
        return this.firstName + ' ' + this.lastName[0];
    }

    addFriend(newFriend) {
        var length;
        length = this.friends.push(newFriend);
    }
}