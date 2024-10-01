
function handleThis(element) {
    console.log("This element was clicked: ", element);
    console.log("This element is not an event, and has no target:", element.target)

}

function handleEvent(event) {
    console.log("This event was passed in: ", event);
    console.log("This is the event target:", event.target)

    event.target.style.fontSize = "3em";
    event.target.style.color = "red";
}


