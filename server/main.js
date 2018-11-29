import {Meteor} from 'meteor/meteor';
import {Players} from './../imports/api/players';

Meteor.startup(() => {
    Players.insert({
        name: "Liz",
        score: "209345"
    });
    console.log(Players.find().fetch());
});