console.log('App has started.');

const fs = require('fs');
const os = require('os');
const _ = require('lodash');
const notes = require('./notes.js');

var user = os.userInfo();

console.log(_.isString(user.username));

console.log(notes.add(1, -1));

// fs.appendFile('greetings.txt', `Hello ${user.username}! You are ${notes.age}`, (err) => {
//     if (err) throw err;
//     console.log(notes.addNote());
// });
