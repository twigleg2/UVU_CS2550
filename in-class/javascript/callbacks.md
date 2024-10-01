## [Callback Functions](https://www.w3schools.com/js/js_callback.asp)
A function is considered to be a *callback* if it is provided as a parameter to another function.  NOTE: do not put parenthesis on the callback when passing it as a parameter;

```
function saySomething(variable, callback) {
    callback(variable);
}

function sayHi(name) {
    console.log("Hi, " + name + "!  Nice to meet you!")
}
function sayBye(name) {
    console.log("Bye, " + name + ", it was nice to meet you!")
}

saySomething("Bob", sayHi);
saySomething("Bob", sayBye);
```

Many times, Anonymous functions are used as a callback.
```
saySomething("Bob", function(name){console.log("How old are you " + name + "?")})
```
#### Why is this useful?
Callback functions shine in Asynchronous Programming and in Functional Programming.  They also provide the flexibility to create an anonymous function in-line instead of using a pre-defined function.

## Functional Programming
### map
Creates a new array by applying a callback function to each element of the array individually.  
`someArray.map(callback)`

### filter
Creates a new array that contains only the items that pass the condition provided in the callback function.  
`someArray.filter(callback)`

### reduce
Returns a single value.  This value is obtained by combining all the values in the array according to the rules defined in the callback function.  It starts at index zero and works to the right.  
`someArray.reduce(callback)`

Reduce can accept an initial value as the second parameter.  The second parameter is the *accumulator*, and this value is used as the initial value in your computation.  If you do not provide this accumulator parameter, the first element in your array will be used as the accumulator.  
`someArray.reduce(callback, 0)`

NOTE: the callback function used for reduce must accept two parameters.  
`someArray.reduce((ac, n) => {return ac + n}, 0)`
### reduceRight
same as reduce, but starts at the highest index and works toward index zero;

### every
Returns true if every element in the array passes the condition specified in the callback.  
Otherwise, returns false.

### some
Returns true of any one of the elements in the array satisfies the condition specified in the callback.  Returns false only if they all fail to satisfy the condition.

### from
Creates an array out of a string or any object that has a length property.
NOTE: this does not use a callback and does not operate on an existing array.  
`Array.from("abc") //returns ['a','b','c']`

### Combining multiple functional calls
Since many of the functional methods operate on an array and return an array, they can be combined in-line.
`someArray.map(callback).reduce(differentCallback)`

### Callback methods with more than one parameter
Some callbacks can use more than one parameter, as we've seen with the reduce method.  However, all callbacks have the ability to accept at least three parameters.  When more than one parameter are used, they give access to the index of the item currently being accessed (2nd parameter) and the entire array being operated on (3rd parameter).

ex. `function callback(arrayItem, IndexOfArrayItem, entireArray)`

## Asynchronous Programming
By default, javascript code runs *synchronously*, meaning that one line of code must complete before the next line can run.  However, it's possible to allow more than one function to run at the same time, also called running in parallel.  This is very useful when making api calls or waiting for a file to load, for example.

### callbacks
We've used callbacks before, such as in the example below.  Assume that the attempt to load the file is an asynchronous process.
```
function successCallback(value) {
  //do something with the good value
}

function failCallback(error) {
  //cleanup the mess or handle the error
}

loadFile(fileName, successCallback, failCallback) {
  //attempt to load the file

  if(fileLoaded) {
    successCallback("yay!");
  } else {
    failCallback("boo!");
  }
}
```

This works great, until we have a scenario where we have to layer callbacks within callbacks within callbacks...
```
doSomething(function (result) {
  doSomethingElse(result, function (newResult) {
    doThirdThing(newResult, function (finalResult) {
      console.log(`Got the final result: ${finalResult}`);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);
```

### Promises
> "Producing code" is code that can take some time.  
> "Consuming code" is code that must wait for the result.  
> A Promise is an Object that links Producing code and Consuming code   
> -- <cite>[W3Schools](https://www.w3schools.com/js/js_promise.asp)</cite>   

A Promise is an object in Javascript.  It acts as a proxy for a value that may not be known when the promise is created, and may not ever be known at all.  It represents the eventual completion or failure of an asynchronous operation.

In the examples below, the `loadFile` function returns a promise.  a promise has a two methods, `then` and `catch`, which accept callbacks as parameters.  The callbacks will not be executed until the code inside the promise resolves (succeeds) or rejects (fails).
```
loadFile.then(successCallback, failCallback);

loadFile.then(successCallback).catch(failCallback);

loadFile.then(successCallback);

//Note that a failCallback is not required.
```

Consider the example from the callback section above, which has multiple callbacks nested inside of each other.  Using promises, we can make that much easier to read and debug.
```
doSomething()
  .then((result) => doSomethingElse(result))
  .then((newResult) => doThirdThing(newResult))
  .then((finalResult) => {
    console.log(`Got the final result: ${finalResult}`);
  })
  .catch(failureCallback);
```

So, how do we create our own promises?  Common asynchronous javascript operations will return a promise on their own, so we don't need to create one.  However, if we do need to create one, consider the following:
```
let loadFile = new Promise((successCallback, failCallback) => {
  //attempt to load the file

  if(fileLoaded) {
    successCallback(fileContents);
  } else {
    failCallback(fileName);
  }
});
```
Again, you do not have to provide a failCallback if you don't want to


### async/await
The `async` keyword can be added before a function definition.  Any function labeled with `async` will return a promise. All three functions in the following example are equivalent:
```
function makeApiCall(searchEngine, query) {
  //attempt the API call

  return new Promise(resolve => result);
}
```
```
function makeApiCall(searchEngine, query) {
  //attempt the API call

  return Promise.resolve(result);
}
```
```
async function makeApiCall(searchEngine, query) {
  //attempt the API call

  return result;  //this result will be wrapped in a promise
}
```
Because these `async` functions return a promise, we can chain `then` onto the function call
```
makeApiCall(searchEngine, query).then(successCallback);
```


The `await` keyword to can only be used inside of an `async` function.  `await` will make the function pause execution and wait for a promise to resolve before it continues.
```
async function GetSearchResult(searchEngine, query) {
  const response = await MakeApiCall(searchEngine, query);

  document.getElementById("firstSearchResult").innerHTML =  response[0];
}
```

[helpful youtube video](https://www.youtube.com/watch?v=li7FzDHYZpc&ab_channel=RobertsDevTalk)

## Events
events can be handled in the HTML
```
<input type="text" onFocus="focusFunction()">
```
Or the can be handled in the javascript
```
let elements = querySelectorAll("input");

for (let element of elements){
  element.addEventListener("focus", function() {
    //change the border color, etc.
  });
}
```
Note that these event handlers use callback functions.  Remember callback functions from earlier?

### [types](https://www.w3schools.com/jsref/dom_obj_event.asp)
* click
* mouseover
* mouseenter
* mouseout
* mousemove
* keydown
* keyup
* focus
* blur
* change
* input
* submit
* load
* DOMContentLoaded

[Debug Events](https://stackoverflow.com/questions/10213703/how-do-i-view-events-fired-on-an-element-in-chrome-devtools)

### Event Timing (not timers)
#### Capture phase: 
Events which are registered for the parent elements of the target are triggered.  
NOTE: this phase is off by default.  To turn it on, provide a `true` boolean as the third parameter to the addEventListener function.  This also turns off the bubble phase!
ex: `element.addEventListener("focus", callbackFunction, true);`   
#### Target phase:
 Events which are registered for the target element are triggered.  
#### Bubble phase:
 Events which are registered for parent elements of the target are triggered.  
NOTE: not all events have a bubble phase.  Check which ones don't before you rely on them.

### Changing Default Behavior
#### Stop Propagation
The capture/bubble process can be interrupted by calling the `stopPropagation()` method from within your callback function.  This is useful if you have a general handler for something high in the DOM tree which you want to be replaced with a more specific handler lower in the DOM tree .(otherwise, both handlers would be called) 

#### Prevent Default
The browser often has default event handlers registered, especially for click events.  These can be turned off by calling the `preventDefault()` method inside your callback function.  You can also use this `preventDefault()` method to enhance your own callback functions. For example, you may not want every key on the keyboard to register an event, so you can check for those keystrokes and ignore them. 

### Timers
#### timeouts
`setTimeout(callbackFunction, delay)`: The callback function will be executed exactly once after a delay.  the delay is in milliseconds.  This method returns timerId that can be used in the clearTimeout method.  
`clearTimeout(timerId)`:  An existing, active timer can be canceled with this method.

#### intervals
`setIntervall(callbackFunction, delay)`: the callback is function is repeatedly executed after a delay.  
`clearInterval(intervalId)`: an existing, active interval can be canceled using the intervalId.

## Browser Storage
### Session storage
Stores key/value pairs in the browser until the browser is closed.
* `sessionStorage.getItem(key)`
* `sessionstorage.setItem(key, value)`
* `sessionStorage.removeItem(key)`
* `sessionStorage.clear()`
* 
### Local Storage
Stores key/value paris in the browser until the cache is cleared.  This is not deleted when the browser is closed.
* `localStorage.getItem(key)`
* `localstorage.setItem(key, value)`
* `localStorage.removeItem(key)`
* `localStorage.clear()`

### Cookies
//later

### Which type of storage to use??
Local storage and Session storage are intended for client-side use.  Cookies are intended for server-side use.  When trying to determine which to use, ask yourself "Does the server need this data?  Do I want to send it to the server?" if the answer is yes, cookie.  If the answer is no, use local storage or session storage.  