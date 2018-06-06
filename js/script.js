// Make a keyless car EVEN BETTER!
// We are improving our car from previous exercise now.
// Solutions to future exercises will be in the .js file (meaning Javascript file) from now on.

// var age = prompt("What is your age?");

// if (Number(age) < 18) {
// 	alert("Sorry, you are too yound to drive this car. Powering off");
// } else if (Number(age) > 18) {
// 	alert("Powering On. Enjoy the ride!");
// } else if (Number(age) === 18) {
// 	alert("Congratulations on your first year of driving. Enjoy the ride!");
// }

function checkDriverAge() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

var checkDriverAge2 = function() {
    var age = prompt("What is your age?");

    if (Number(age) < 18) {
        alert("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        alert("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        alert("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

function checkDriverAge3(age) {
    if (Number(age) < 18) {
        return("Sorry, you are too yound to drive this car. Powering off");
    } else if (Number(age) > 18) {
        return("Powering On. Enjoy the ride!");
    } else if (Number(age) === 18) {
        return("Congratulations on your first year of driving. Enjoy the ride!");
    }
}

//1. Make the above code have a function called checkDriverAge(). Whenever you call this function, you will get prompted for age. Use Function Declaration to create this function.
// Notice the benefit in having checkDriverAge() instead of copying and pasting the function everytime?

//2. Create another function that does the same thing, called checkDriverAge2() using Function Expression.

//BONUS: Instead of using the prompt. Now, only use the return keyword and make the checkDriverAge() function accept an argument of age, so that if you enter:
//checkDriverAge(92);
//it returns "Powering On. Enjoy the ride!"

// using this array,
var array = ["Banana", "Apples", "Oranges", "Blueberries"];

// 1. Remove the Banana from the array.
// array.shift();
// console.log(array);

// 2. Sort the array in order.
// array.sort();
// console.log(array);

// 3. Put "Kiwi" at the end of the array.
// array.push("Kiwi");
// console.log(array);

// 4. Remove "Apples" from the array.
// array.splice(0,1);
// console.log(array);

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])
array.reverse();
console.log(array);
//you should have at the end:
["Kiwi", "Oranges", "Blueberries"]

// using this array,
 var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".
console.log(array2[1][1][0]);