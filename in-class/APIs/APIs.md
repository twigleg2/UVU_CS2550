# APIs
An API, or Application Programming Interface, defines how one program expects to receive data from another.  In other words, it defines how two different programs can communicate with each other.

## REST web services
REST stands for *Representational State Transfer*

GET implies read-only access to some information  
POST implies creating a new resource  
PUT implies updating an existing resource  
DELETE implies removing a resource  

These four operations are often referred to as CRUD, or Create, Read, Update, Delete.  The acronym CRUD is language and platform independent, and you will hear the term used in other non-web applications.


## Forms
The `<form>` tag is intended to facilitate sending information from the browser to the server.  Nested inside of the form tag are one or more input 'widgets'.  
```
<form action="https://example.com/api" method="GET">
    <label for="username">Username:</label>
    <input type="text" name="username" id="username">
    ...
    <input type="submit">
</form>
```  
### Widgets

[`<input>`](https://www.w3schools.com/tags/tag_input.asp) does NOT have a closing tag.  
Some common attributes are:
* `type`: text, password, button, etc.
* `name`: this is the key part of the key=value pair sent to the server.  If you don't include a name attribute, this field will not be sent to the server.
* `id`: unique identifier
* `placeholder`: helper text placed inside of a text input field
* `value`: specifies a default value if you wish to provide one.  

Some common types are:
* `text`
* `password`
* `checkbox`
* `radio`
```
<input type="text" name="username" id="username" placeholder="type your username here" value="anonymous">
```

[`<label>`](https://www.w3schools.com/tags/tag_label.asp) provides descriptive text for each input field.  It has a `for` attribute which should be given the same value as the related input id. This DOES have a closing tag.

```
<label for="username">Username:</label>
```

[`<textarea>`](https://www.w3schools.com/tags/tag_textarea.asp) allows the user to input multiple lines of text.  It DOES have a closing tag.  You can specify the default number of rows/columns using the attributes `rows` and `cols`.  This textarea box can be resized by the user.
```
<textarea name="review" id="review" rows="4" cols="50">Please enter your detailed review here:</textarea>
```

[`<select>`](https://www.w3schools.com/tags/tag_select.asp) allows for creation of a drop-down menu.  It DOES have a closing tag.  Nested inside the opening and closing tags are multiple [`<option>`](https://www.w3schools.com/tags/tag_option.asp) tags.  The dropdown can be converted to a listbox by specifying the `size` attribute.
```
<select name="browsers" id="browsers">
    <option value="Edge">Edge</option>
    <option value="Firefox">Firefox</option>
    <option value="Chrome">Chrome</option>
    <option value="Opera">Opera</option>
    <option value="Safari">Safari</option>
</select>
```

[`<datalist>`](https://www.w3schools.com/tags/tag_datalist.asp) combines the functionality of `<input>` and `<select>`.  It cannot exist on it's own and must be linked to an input field using the `list` attribute on the input field.

```
<input type="text" list="browserList" name="browsers" id="browsers>
<datalist id="browserList">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
</datalist>
```

[`<button>`](https://www.w3schools.com/tags/tag_button.asp) is a special form of the `<input type="button">`, `<input type="submit">`, and `<input type="reset">` tags. A button created using the `<button>` tag can change the default text displayed on the button, which is not possible using `<input>` because it does not have a closing tag.  A `<button>` must specify what kind of button it is, either `submit`, `reset`, or generic `button`.
```
<button type="button">Click me!</button>
```

[`<fieldset>`](https://www.w3schools.com/tags/tag_fieldset.asp) is a way of logically grouping fields that are related.  This is extremely useful for people using screen readers or other assistive technology.  For example, you can group a set of radio buttons like this:  
```
<fieldset>
    <legend>color</legend>

    <input type="radio" name="color" value="Red" id="red">
    <label for="theOffice">Red</label>

    <input type="radio" name="color" value="Green" id="green">
    <label for="community">Green</label>

    <input type="radio" name="color" value="Yellow" id="yellow">
    <label for="bigBang">Yellow</label>

    <input type="radio" name="color" value="Blue" id="blue">
    <label for="other">Blue</label>
</fieldset>
```

### submitting a form

When these fields are submitted through a GET request, they are sent as part of the url.  For example:
`https://example.com/api?username=UVID10996159&color=Green`
Note that the url is followed by a `?` and then the `key=value` pairs.  If more than one key value pair needs to be sent, they are separated by `&`

When sent in another type of request, they are often included in the HTTP Request Body.  You can view the items in the request body by accessing the web browser tools -> network tab -> select your request from the list -> payload tab

### Response codes
When you send an api request, the server is going to respond with one of many codes.  the list of possible codes is very long, but some of the most common ones include:
* 200 - OK
* 201 - Created
* 202 - Accepted
* 204 - No Content
* 401 - Unauthorized
* 403 - Forbidden
* 404 - Not Found
* 500 - Internal Server Error

These codes are grouped by type.  
* 100s -> informational
* 200s -> successful
* 300s -> redirection
* 400s -> client error
* 500s -> server error

## [JSON](https://www.json.org/json-en.html)
Content sent through REST web services are very often formatted as JSON.  JSON stands for *JavaScript Object Notation*.  Note that JSON and JavaScript objects have a very similar form, but they are not identical, and therefore are not completely interchangeable.  
It's recommended to get a browser extension that will parse and format javascript, like [this one](https://chromewebstore.google.com/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?pli=1)


## Fetch
`fetch(resource, optionsObject)` is built into newer versions of javascript and provides the tools needed to build and make API calls.  It takes one or two parameters and returns a Promise. The first is the url, the second is an object with that contains as many or as few options as you need.  


## Sample APIs you can play around with
https://pokeapi.co/  
https://www.boredapi.com/  
https://jsonplaceholder.typicode.com/

