// Advanced Arrays

const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
    double.push(num * 2);
})

console.log('forEach', double);

// map, filter, reduce

// const mapArray = array.map((num) => {
//     return num * 2;
// });
const mapArray = array.map(num => num * 3);

console.log('map', mapArray);

// filter

// const filterArray = array.filter(num => {
//     return num > 5;
// })
const filterArray = array.filter(num => num > 5);

console.log('filter', filterArray);

// reduce

const reduceArray = array.reduce((accumulator, num) => {
    return accumulator + num;
}, 0);

console.log('reduce', reduceArray);

// Complete the below questions using this array:
const array2 = [
	{
		username: "john",
		team: "red",
		score: 5,
		items: ["ball", "book", "pen"]
	},
	{
		username: "becky",
		team: "blue",
		score: 10,
		items: ["tape", "backpack", "pen"]
	},
	{
		username: "susy",
		team: "red",
		score: 55,
		items: ["ball", "eraser", "pen"]
	},
	{
		username: "tyson",
		team: "green",
		score: 1,
		items: ["book", "pen"]
	},

];

//Create an array using forEach that has all the usernames with a "!" to each of the usernames
let newArray2 = []
array2.forEach(user => {
	let { username } = user;
	username = username + "!";
	newArray2.push(username);
})
console.log(newArray2);

//Create an array using map that has all the usernames with a "?" at the end of usernames
const mapArray2 = array2.map(user => {
	let { username } = user;
	return username + "?";
})
console.log(mapArray2);

//Filter the array to only include users who are on team: red
const filterArray2 = array2.filter(user => {
	return user.team === "red";
})
console.log(filterArray2);

//Find out the total score of all users using reduce
const total = array2.reduce((acc, user) => {
	return acc + user.score
}, 0);
console.log(total);


// (1), what is the value of i? INDEX of the array.
// (2), Make this map function pure:
// const newArray = arrayNum.map((num, i) => {
// 	console.log(num, i);
// 	alert(num);
// 	return num * 2;
// })

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray3 = arrayNum.map((num, i) => {
	return num * 2;
})



//BONUS: create a new list with all user information, but add "!" to the end of each items they own.
const answer = array2.map(user => {
	user.items = user.items.map(item => {
		return item + "!"
	});
	return user;
})
console.log(answer);

