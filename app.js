const prompt = require("prompt-sync")({sigint:true});

let names = prompt("What's your name?: ");
const start = (names) => {
    console.log("Here is my first app to push to GitHub")
    console.log(`Remember me as ${names}`)
}

start(names);