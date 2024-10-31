//Check out the HTML file and notice that it has nothing inside the <body> tag.  We're going to add all out HTML using javascript!

// First, we need to get the element that we want to add children to.
let body = document.getElementById("body");
console.log("body: ", body);


// Second, we need to create a new element
let hello = document.createElement("h1");
// Third, we need to add content into the new element
hello.textContent = "Hello, World!";
// Fourth, we need to add the new element to the DOM
body.append(hello);


// Notice I've mande a helper function to avoid repeating the code above a bunch of times.
body.append(createNewElement("h2", "level 2 header"));
body.append(createNewElement("p", "lorem ipsum dolor..."));
let newElement = createNewElement("p", "more content...");
newElement.style.color = "red";
body.append(newElement);


function createNewElement(element, content) {
    let newParagraph = document.createElement(element);
    newParagraph.textContent = content;
    return newParagraph;
}

function createEmptyElement(elementType) {
    let newParagraph = document.createElement(elementType);
    return newParagraph;
}