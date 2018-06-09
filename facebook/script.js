var database = [
    {
        username: "olle",
        password: "hi"
    },
    {
        username: "sally",
        password: "123"
    },
    {
        username: "ingrid",
        password: "777"
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
    },
    {
        username: "Ingrid",
        timeline: " Javascript is so cool!"
    }
];

function isUserValid(username, password) {
    for(var i=0; i < database.length; i++) {
        if(database[i].username === username && database[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    //console.log(isUserValid(username, password));
    if(isUserValid(username, password)) {
        console.log(newsFeed);
    } else {
        alert("Wrong username and password!");
    }
}

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");

signIn(userNamePrompt, passwordPrompt);