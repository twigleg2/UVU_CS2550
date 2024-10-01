

function saySomething(variable, callback) {
    callback(variable);
}

function sayHi(name) {
    console.log("Hi, " + name + "!  Nice to meet you!")
}

function sayBye(name) {
    console.log("Bye, " + name + ", it was nice to meet you!")
}

let askAboutWork = function (name) {
    console.log(name + " where do you work?");
}

saySomething("Bob", sayHi);
saySomething("Bob", sayBye);

saySomething("Bob", function (name) { console.log("How old are you " + name + "?") });
saySomething("Bob", (name) => { console.log("How old are you " + name + "?") });
saySomething("Bob", name => { console.log("How old are you " + name + "?") });
saySomething("Bob", askAboutWork);

// askAboutWork("bob");




//constants
const EVEN_NUMBERS = [2, 4, 6, 8, 10];
const ODD_NUMBERS = [1, 3, 5, 7, 9];

//callback function
function triple(x) {
    return x * 3;
}


//map
let tripledNumbers = EVEN_NUMBERS.map(triple);
tripledNumbers;

let modifiedNumbers = EVEN_NUMBERS.map(x => { return x - 3 });
modifiedNumbers;





//constants
const ONE_THROUGH_TEN = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//callback function
function isEven(x) {
    return x % 2 == 0;
}

//filter
let evens = ONE_THROUGH_TEN.filter(isEven);
evens;

let odds = ONE_THROUGH_TEN.filter(x => { return x % 2 != 0 });
odds;

let greaterThanFive = ONE_THROUGH_TEN.filter(x => { return x > 5 });
greaterThanFive








//constants
const ONE_TWO_THREE = [1, 2, 3];
const ONE_TWO_THREE_FOUR = [1, 2, 3, 4];
const ANIMALS = ['dog', 'cat', 'fish'];

//callback function
function add(a, b) {
    return a + b;
}

function countCharacters(text) {
    return text.length;
}


//reduce
let sum = ONE_TWO_THREE.reduce(add);
sum;

let product = ONE_TWO_THREE_FOUR.reduce((ac, x) => { return ac * x });
product;

let allAnimals = ANIMALS.reduce((ac, n) => { return ac + "-" + n }); // 'dog' + '-' + 'cat' --> ac = 'dog-cat' 
allAnimals;

let newAnimals = ANIMALS.reduce((ac, n) => { return ac + n + ", " }, "I have these animals as pets: "); // 'dog' + '-' + 'cat' --> ac = 'dog-cat' 
newAnimals;


//combining more than one functional call
let characterCount = ANIMALS.map(countCharacters).reduce(add);
characterCount;
















//constants
const FIBONACCI = [0, 1, 1, 2, 3, 5, 8, 13, 21];
const someNumbers = [1, 2, 3, 4, 5, 6, 4, 3, 2, 1];
//result = [true, true, true, true, false]


//callbacks with more parameters
function equals(item, index) {
    return item == index;
}

let matches = FIBONACCI.map(equals);
console.log(matches);


function palindromeTest(item, index, array) {
    if (item == array[array.length - index - 1]) {
        return true
    }
    else {
        return false;
    }
}

let isPalindrome = someNumbers.map(palindromeTest);
isPalindrome;




// const FIBONACCI = [0, 1, 1, 2, 3, 5, 8, 13, 21];

function greaterThanAverage(item) {
    let average = FIBONACCI.reduce(add) / FIBONACCI.length;  // innoficcient, because this is re-calculated every time;
    return item > average;
}

let result = FIBONACCI.filter(greaterThanAverage);
result;
