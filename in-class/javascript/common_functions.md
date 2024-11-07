# Common Javascript Functions and methods
These are not all functions and methods, of course, but simply some that I think you'll find most useful.  

## general functions
- `String(item)` - converts the item into a string
- `Number(someString)` - converts a string to a number
- `parseInt(someString)` - converts a string to a number.  
  - `Number` and `parseInt` are slightly different.  You can find out how for yourself ;)
- `myString.substr(startingIndex, EndingIndex)` - Called on any string, this will return a substring the begins at the startingIndex and ends *before* the endingIndex (endingIndex is non-inclusive).


## [Math](https://www.w3schools.com/js/js_math.asp)
Check out the link above.  The `Math` object is simple enough that I don't think it's worth me re-writing it here.

## [arrays](https://www.w3schools.com/js/js_array_methods.asp)
Called on an array. ex: `myArray.push('cat')`
- `length` - Gives the number of items in the array.  This is technically not a method, but a property, so it does not have parenthesis at the end.
- `at(x)` - Returns the item in the array at index `x`
- `push(item)` - adds `item` to the end of the array
- `pop()` - removes AND returns the last item in the array
- `shift()` - removes AND returns the first item in the array
- `unshift(item)` - adds `item` to the beginning of the array
- `concat(anotherArray)` - adds all items in `anotherArray` to the end of the array

### functional methods
see [my notes on callbacks](.\functional\callbacks.md) for more info. Note that none of these mutate the original array, so they are safe to use pretty much anywhere.
- `map(callback)` - Applies the callback function to every element in the array. Returns a new array with each element retaining any changes that were applied in the callback.  
  - This is commonly used to apply a mutation to every item in the array.  For example, you might use it to convert numbers to strings, or to convert objects into a single property.
- `filter(callback)` - Applies the callback function to every element in the array.  Returns a new array containing only the items that satisfy the condition in the callback.
  - the callback should be doing some sort of comparison and should return true or false.
- `reduce(callback)` - combines all items in the array into a single value.  The way the items are combined is determined in the callback.
  - The callback takes two parameters.
- `forEach(callback` - similar to `map`, but does NOT return a new array!  This is often used to print the values in the array.


## [DOM manipulation](https://www.w3schools.com/whatis/whatis_htmldom.asp)
These methods are used to interact with your HTML file.  All of them operate on the `document` OR on any HTML element. When calling on the document, applies to the entire HTML file (The entire DOM),  When called on an element, only searches within that element.  That means you can combine these to narrow down your search!  
ex: `document.getElementById(id)`
- `getElementById(id)` - returns the HTML element with the associated id, if it exists.
- `getElementByTagName(htmlElementType)` - Returns an array of all elements of the given type.
- `getElementsByClassName(className)` - Returns an array of all elements that have the given class.
- `querySelectorAll(cssSelector)` - Returns an array of all elements that would be selected by the given CSS selector.  
  - You can use ANY CSS selector, including, but of course not limited to, tag type, class names, ids, children selectors, etc.  These should be written exactly as they would appear in your css file.
  - ex: `cssSelector = ` 
    - `'li'`
    - `'.infoBox'`
    - `'#container .card'`
    - `'.article > p'`
    - `'nav a[target="_blank"]'`
- `addEventListener(listenerType, callback)` - Add an event listener to an element.  
  - The listener can be of type `click`, `hover`, etc.  
  - You can build the callback to do anything you want.  Maybe change some css, maybe send an API request.  Use your imagination!
  - You probably don't want to add an event listener to the entire `document`, so use some of the methods above to select the appropriate element first, *then* add the event listener to that one element (or maybe a group of elements ¯\\_(ツ)_/¯ )