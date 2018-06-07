var database = [
    {
        username: "olle",
        password: "hi"
    }
];

var newsFeed = [
    {
        username: "Kia",
        timeline: "So tired of everything"
    },
    {
        username: "Pelle",
        timeline: " Javascript is so cool!"
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

function signIn(user, pass) {
    if(user === database[0].username && pass === database[0].password) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);