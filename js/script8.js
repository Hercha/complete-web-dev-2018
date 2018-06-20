// ASYNC AWAIT

/* movePlayer(100, 'Left')
    .then(() => movePlayer(400, 'Left'))
    .then(() => movePlayer(10, 'Right'))
    .then(() => movePlayer(330, 'Left'))

async function playerStart() {
    const firstMove = await movePlayer(100, 'Left'); // pause
    await movePlayer(400, 'Left'); // pause
    await movePlayer(10, 'Right'); // pause
    await movePlayer(330, 'Left'); // pause
} */

/* fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(console.log) */
/* 
async function fetchUsers() {
    const resp = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await resp.json();
    console.log(data);
}
fetchUsers();

const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
]

const getData = async function() {
    try {
        const [ users, posts, albums ] = await Promise.all(urls.map(url => 
            fetch(url).then(resp => resp.json())
        ))
        console.log('users', users);
        console.log('posts', posts);
        console.log('albums', albums);
    } catch(err) {
        console.log('oops', err);
    }
}
getData(); */

// Solve the below problems:

// #1) Convert the below promise into async await
/* fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log) */
  async function fetchStarships() {
      const resp = await fetch('https://swapi.co/api/starships/9/')
      const data = await resp.json()
      console.log(data);
  }
fetchStarships();

// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
    try {
/*         const [ users, posts, albums ] = await Promise.all(urls.map(url =>
            fetch(url).then(resp => resp.json())
        )); */
        const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
            const response = await fetch(url);
            return response.json();
        }));
        console.log('users', users);
        console.log('posta', posts);
        console.log('albums', albums);
    } catch(err) {
        console.log('oops', err)
    }
}
getData();
// #3) Add a try catch block to the #2 solution in order to catch any errors.
// Now chnage one of the urls so you console.log your error with 'ooooooops'