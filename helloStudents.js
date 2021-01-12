'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1

function say(message) {
    console.log(message)
}

function filterItems(arr, query) {
    return arr.filter(function(el) {
        return el.toLowerCase().indexOf(query.toLowerCase()) == 0
    })
}

const students = require('./students.json');

let lastNames = [];
students.forEach(function(student){
    say(`Hello ${student.firstName} ${student.lastName}`);
    lastNames.push(student.lastName);
});

let numWithD = filterItems(lastNames, 'D');
say("");
say(`Number of students with last names starting with 'D': ${numWithD.length}`);
