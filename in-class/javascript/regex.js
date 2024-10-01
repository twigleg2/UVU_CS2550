
let regex = /a|b$/m;
let a = "a\ncat";
// let empty = ""; 
let aa = "B";
let aaaaa = "aaaaa";
let baa = "aab";


let text = "The best things in life are free";
let pattern = /re*/g;

let result = pattern.exec(text); //returns true

console.log(result[0]);


let re = /t.+r/;
let result2 = re.exec("Raise the bar high.");

if (result2 === null) {
    console.log("No match.");
}
else {
    console.log(result2[0]);   // the bar
}

//NOTE: how do I get matches after the first? use global modifier 'g', and what else?