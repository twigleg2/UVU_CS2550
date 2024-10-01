# Javascript - Gaven Finch

## Operators
### arithmetic Operators
* `+`  | add
* `-`  | subtract
* `*`  | multiply
* `/`  | divide
* `%`  | modulus (remainder)
* `**` | exponent
* `++` | increment by one
* `--` | decrement by one

### assignment operators.  
Each of these changes the value that is stored in the variable on the left.
* `=`  | put value on the right into variable on the left
* `+=` | add value on the right to variable on the left
* `-=` | subtract value on the right from variable on the left
* `*=` | multiply value on the right to variable on the left.
* `/=` | divide variable on the left by value on the right
* `%=` | mod variable on the left by value on the right

### Comparison Operators.  
These are used in if statement to decide when to branch.
* `==` | Equality (sometimes called loosely equal)
* `===` | Identity or Strict Equality (sometimes called exactly equal)
  * all comparison operators attempt to convert the left and right value to the same type before doing the comparison EXCEPT the Identity and the Non-identity operators.
* `!=` | Not equal
* `!===` | Non-identity or Not Strictly Equal
* `<` | less than
* `<=` | less than or equal to
* `>` | greater than
* `>=` | greater than or equal to

### Logical operators
* `&&` | AND
* `||` | OR
* `!` | NOT

### Bitwise Operators
These operators are applied to each bit individually and not to the value as a whole.  
* `&` | AND
* `|` | OR
* `^` | XOR
* `~` | NOT
* `<<` | left shift
* `>>` | signed right shift
* `>>>` | zero-fill right shift

## [Implied type conversions](https://www.w3schools.com/js/js_type_conversion.asp)
Javascript has a habit of changing variable types somewhat unexpectedly if you try to combine variables of different types.  For example:  
```
  2 + "3" => "23"
  2 - "3" => -1
```
To avoid this odd behavior, always make sure your variables are of the same type before you try to manipulate them.  you can do this with built-in javascript functions:
* String()
* Number()
  * If you put something into this function that can't be converted, it will return `NaN` (not a number)

### Truthy vs Falsy
Any value that, when converted into a boolean, evaluates to `true` is called a Truthy value.  
Any value that, when converted into a boolean, evaluates to `false` is called a Falsy value.

Conditional statements, like `if()` statements, should be given an expression that will evaluate to either `true` or `false`.  ex. `if(x == 10)` uses a comparison operator that will can only evaluate to either `true` or `false`.   
However, if a conditional statement is given an expression that does not evaluate to either `true` or `false`, it will convert the result into a boolean first and then evaluate.  ex. `if(x + 3)` returns a number.  If that number happens to be zero  `0`, the statement is false.  If it is any other number, the statement is true.

### List of falsy values
* `0` | zero
* `""` | empty string
* `NaN` | Not a Number
* `undefined`
* `null`

## Ternary operator - `?:`
This is similar to a condensed, one-line `if` statement, but it is not the same thing!  A ternary always evaluates to a single value.  
`condition ? expressionIfTrue : expressionIfFalse`  

ex. `let finalScore = (score > 0) ? score : 0`  

While learning, some people find it helpful to break up the ternary operator across multiple lines.  
ex. 
```
let finalScore = (score > 0)  //check if the score is greater than zero
               ? score        // if true put score into finalScore
               : 0;           // if false, put 0 into finalScore
```

## Loops

### While loop
The looping condition is checked every time before the loop is run.  That means you could have a loop that never runs at all if the condition is false the first time it's evaluated
```
let keepLooping = true;
while (keepLooping) {

  //do some stuff

  if(thisHappens) {
    keepLooping = false;
  }

}
```

### do-while loop
The loop is run once before checking the condition.  After the first pass through, it behaves the exact same as the the while loop.  This guarantees that the loop is run at least once.

```
let loopAgain;
do {
  loopAgain = false;

  //do some stuff

  if(thisHappens) {
    loopAgain = true;
  }

} while (loopAgain)
```

### for loop
The for loop has three parts
`for (initialization, condition, Final expression)`  
The *initialization* is executed exactly one time, and it happens before anything else in the loop happens.  Again, it is executed exactly ONE TIME, which means it does not repeat with every loop iteration.  
The *condition* is checked at the beginning of the loop, every time, the same as a `while` loop.  
The *final expression* is run at the end of the loop, every time.  This is typically where you increment your counter.

```
  for (i = 0; i < 10; i++) {
    //this will be repeated 10 times
  }
```

### for-in loop
Automatically iterates over the *indexes or keys* of a collection.
```
  for (let i in collection) {
    //do something for each index of the array
  }
```

### for-of loop
Automatically iterates over the *values* of a collection
```
  for (let item of collection) {
    //do something for each item in collection
  }
```

### altering the normal flow of a loop
There are two keywords that we can use to alter the normal flow of a loop.  
`break` ends the loop immediately.  It will not loop again.  
`continue` ends the current iteration of the loop immediately, but resumes at the top again for another pass through.  

## Switch Statement
```
switch (expression) {
  case value1: 
    //do something
    break;
  case value2:
    //do something
    break;
  default:
    //do something if none of the cases above match
}
```

If you do not include the `break;` statement in you case, it will proceed to execute the next case, and the next, until it finds a `break;` or it reaches the end of the switch.  Note in the example below, if a player gets a score of 4, the code will proceed to case 5, then case 6, then stop because there is a `break;` in case 6.

ex.  
```
switch (finalScore) {
  case 0:
    console.log("Better luck next time");
    break;
  case 1:
  case 2:
  case 3:
    console.log("You barely scraped by!")
    break;
  case 4:
  case 5:
  case 6:
    console.log("Not bad.");
    break;
  case 7:
  case 8:
  case 9:
    console.log("Pretty good!")
    break;
  case 10:
    console.log("You're a professional!");
    break;
  default:
    console.log("You broke the game!");
}
```

## Functions

### standard function definition
```
function name (parameter1, parameter2, ...) {
  //do something
}
```

### assigning functions to variables
```
let name = function(parameter1, parameter2, ...) {
  //do something
}
```

### anonymous functions
These are functions that do not have a name.  In the example above, the function which is being assigned to the variable `name` is an anonymous function

### arrow functions
These are a type of anonymous function.
```
let fun2 = (parameter1, parameter2, ...) => {
  //do something
}
```

## let vs var
You can declare a variable using the `var` keyword instead of the `let` keyword.  Please don't.  Just use `let`
```
let x = 10;
var y = 10;
```

## [Arrays](https://www.w3schools.com/js/js_arrays.asp)
A collection of elements.  Arrays are *ordered*, and this is important. They can contain any kind of element.  
ex.  
`let numbers = [1, 2, 3, 4]`  
`let fruits = ['apple', 'orange', 'pear']`

Access items in an array using it's position.  
`console.log("The item at location 2 is: ", fruits[2]);` // The item at location 2 is: pear

Arrays are a type of *Object*, and they have built-in functions you can use.  
* pop()
* push(newItem)
* shift()
* unshift(newItem)  
* length()  
ex.  `fruits.push("banana")`  // ['apple', 'orange', 'pear', 'banana']


## Objects
### Basic structure
variables are defined with the name on the left, the value on the right, and a colon in the middle, kind of like css.  Note, however, that you must use a comma between lines instead of a semicolon
```
let exampleObject = {
  someVariable: 2,
  someString: "example string",
  someArray: [5,6,7],
}
```

### Defining methods
Functions that are defined inside of an object are called *methods*  
you can define a method in the following ways:
```
let exampleObject = {
  doSomething() {
    //code here
  },

  doSomethingElse: function() {
    //code here
  },

  doSomethingBad: () => {
    //bad, don't do it this way
  }
}
```

#### don't use `=>`  !
Up until this point the `function` keyword and the arrow `=>` syntax have been used interchangeably to create anonymous functions. However, there is one important difference relating to the `this` keyword.  
In a function defined with the `function` keyword, the `this` keyword refers to the object on which you *call* the function ex: `myExampleObject.doSomething()`.  in an arrow `=>` function, the `this` keyword refers to the object in which you *define* the function.  [check out this explanation](https://www.freecodecamp.org/news/javascript-arrow-functions-in-depth/#:~:text=One%20significant%20difference%20between%20the,which%20you%20define%20the%20function.) if you want to know more.

### `this` keyword
If your object function needs to access variables in the same object, you must use the `this` keyword.
```
let exampleObject = {
  year: 2024,

  PrintYear() {
    console.log("It is the year: " + this.year )
  }
}
```

### `get` and `set`
get and set are special keywords that allow you to define properties which are computed when accessed.  For example, We only need to know the radius of a circle and all other properties can be calculated.  Conversely, given any property of a circle, we can calculate and update the radius.
```
let circle = {
    radius: 7,

    get diameter() {
        return radius * 2;
    },

    get circumference() {
        return 2 * Math.PI * this.radius;
    },

    get area() {
        return Math.PI * (this.radius ** 2)
    },

    set diameter(d) {
        this.radius = d / 2;
    },

    set circumference(c) {
        this.radius = c / (2 * Math.PI);
    },

    set area(a) {
        this.r = Math.sqrt(a / Math.PI);
    },
}
```

### Primitive or Reference?
A *primitive* data type is not an object and can have no methods.  examples include: number, string, boolean, null, undefined.  
All objects in javascript are *references*.  Passing an object into a function is passing that object by reference, and attempting to copy any object by assigning it to a new variable only copies its reference.  In the example below, `x` and `y` contain the same reference to the same object.
```
let x = {
  someVariable: 2,
  anotherVariable: "hi",
}

let y = x; //creates a reference, not a copy
```

NOTE: primitive types often have *wrapper* classes that provide methods.

[Object.assign() to deep clone an object.](https://www.geeksforgeeks.org/javascript-object-assign-method/)


### Objects as Maps
Javascript objects can treated as maps.  You can access any property values using the square bracket notation.  
```
let person = {
  name: "Bob",
  age: 25
}

person["name"]; // returns "Bob"
person.name;  //returns "Bob"
```

#### available map operations:
`Object.keys()` returns an array of all property names in the object.  
`propertyName in Object`  return true if the object has a property with the given name.  
`delete Object[propertyName]`  deletes the property from the object if it exists.

### Actual Maps
newer versions of javascript have actual maps so you don't have to pretend a generic object is a map, like above.
` let exampleMap = new Map();`

#### Map methods
`set(key, value)`  If the key doesn't exist, adds a key/value pair to the map. If the key already exists, updated the value.  
`has(key)` returns true if the key exists in the map, false otherwise.  
`get(key)` return the value associated with the key, if present.  
`delete(key)` removes the key/value pair from the map.  
`size` returns the number of key/value pairs in the map.  

### The [Math object](https://www.w3schools.com/js/js_math.asp)
just click the link above...


## Exception Handling and  try/catch/finally

If your program runs into an major error, like an array index being invalid, normally the program will just stop running.  You can use exception handling to make your program more robust in areas where you expect there might be issues.

```
try {
  //the code inside the try block is where you expect the issue to arise
  //you can throw your own exceptions whenever you want

  if (/* condition*/) {
    //something bad happened, throw an error
    throw Error("This is an exception because something bad happened");
  }
}

catch (exception) {
  //If an exception is thrown, the code will immediately jump to the catch block.  You can then use the log the exception or have some other code to handle the issue.

  exceptions.push(exception);
  console.log(exception);
}

finally {
  // this is always executed, regardless if an exception was thrown or not.
}
```

You can throw whatever you want, but typically you would throw an `Error` object

#### Error object types:
* Error
* RangeError
* InternalError
* TypeError


## Regular Expressions [(regex)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions/Cheatsheet)
A Regular Expression is a set of characters which define a pattern.  The encoded pattern is used to determine if strings match the pattern.
Regular Expressions are easily identifiable because the begin and end with a forward slash `/` instead of quotation marks `'` or `"`

### special characters
Some characters with special meaning include:  
| char | meaning                                                                                              |
| ---- | ---------------------------------------------------------------------------------------------------- |
| *    | match the preceding character zero or more times                                                     |
| +    | match the preceding character one or more times                                                      |
| ?    | match the preceding character zero or one time                                                       |
| +?   | match the preceding character as few times as possible                                               |
| ^    | match must be found at the beginning of the string (matches in the middle or end don't count)        |
| $    | match must be found at the end of the string (matches at the beginning or in the middle don't count) |
| \|   | match this side \| or match this side                                                                |
| []   | match any character inside the square brackets                                                       |
| ()   | designate a group of characters to be effected by a following quantifier, like ?, *, +               |
| .    | match any single character (but not newline)                                                         |
| \w   | match any word character (alphanumeric and underscore)                                               |
| \W   | match any non-word character                                                                         |
| \d   | match any digit                                                                                      |
| \D   | match any non-digit                                                                                  |
| \s   | match any whitespace character                                                                       |
| \S   | match any non-whitespace character                                                                   |

### Mode modifiers
any character placed after the final `/` of a regular expression is a mode modifier, which changes the default matching rules.
| char | meaning                                                                                                   |
| ---- | --------------------------------------------------------------------------------------------------------- |
| i    | ignore case / case insensitive                                                                            |
| m    | ^ and $ now also match before/after a newline character instead of only at the very beginning or very end |
| g    | search for duplicate occurrences of the pattern instead of just one occurrence                            |

### Testing regex in javascript
`test` is a built-in javascript method, used to test if a string matches a regex pattern.
```
let text = "The best things in life are free"; 
let pattern = /e/;

let result = pattern.test(text); //returns true
```

`exec` is a built-in javascript method that can extract the matching parts of a string.  The matching portions are placed in an array.  
Remember that default regex matching behavior only returns the first match.  If you want all matches, add the global mode modifier after the regex `/.../g`.  
NOTE: this also returns any matches for groupings in parenthesis.  The entire matched string will be placed in the array first, followed by any substrings that match a specified grouping.
```
let re = /t.+r/;
let result = re.exec("Raise the bar high.");

if (result === null) {
   console.log("No match.");
}
else {
   console.log(result[0]);   // the bar
}
```