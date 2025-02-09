// this module reposnsible for taking input from the console 
const readline = require('readline');

// crating interface : sets readline interface to standard input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// prompting for user input
rl.question('Enter your name', (yourName) => {
    console.log('Reverse version of your name is', reverseString(yourName));
    rl.close();
});

function reverseString(name) {
    let n = name.length;
    let reverse = "";
    for(let i = 0; i < n; i++) {
        reverse += name[n - i - 1];
    }
    return reverse;
}