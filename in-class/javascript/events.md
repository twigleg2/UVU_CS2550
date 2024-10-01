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