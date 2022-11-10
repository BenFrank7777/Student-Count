// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

let laps = 0;
let countEl = document.getElementById("count-el");
let counted = document.getElementById("counted");
let array = [];
let entriesEl = document.getElementById("entries-el");
let name = "Frank, ";
let greeting = "Hello ";
let deleteBtn = document.getElementById("delete-btn");

function increment() {
    laps += 1;
    console.log(laps);
    countEl.innerText = laps;

    // if (counted.click) {
    //     function save() {
    //         let saved = laps;
    //         console.log(saved);
    //         document.getElementById("counted").innerText = saved;
    //     }
    // }
} //after the first click the app starts looping only the icrement() function and it doesn't reset laps to '0'.


//1. Create a function, save(), which logs out the count when it's called
function save() {
    let saved = " " + laps + " - ";
    console.log(saved);
    entriesEl.innerHTML += saved;
    //or welcomeEl.textContent += saved; so i don't have to add the "(empty space)" in the "saved" variable.

    // if (counted.click) {
    //     //array.push(saved)   
    //     // let newArray = array;
    //     array[array.length] = saved;
    //     welcomeEl.innerText = greeting + name + "you have saved the laps: " + array;
    //     console.log(array); 
    // }
    laps = 0;
    countEl.innerText = 0;

}



if (deleteBtn.click) {
    function deleted() {
        entriesEl.innerHTML = "Previous entries:";
        laps = 0;
        countEl.innerText = 0;
    }
}

// // Grab the welcome-el paragraph and store it in a variable called welcomeEl
// let welcomeEl = document.getElementById("welcome-el");
// // Create two variables (name & greeting) that contains your name
// let name = "Frank";
// let greeting = "Hello, welcome back ";
// // and the greeting we want to render on the page
// // Render the welcome message using welcomeEl.innerText
// welcomeEl.innerText = greeting + name;









/* */
/* */
/* */
