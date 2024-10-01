document.get

let form = document.getElementById("form");
form.addEventListener("submit", handleSubmit);


function handleSubmit(event) {

    let firstName = document.getElementById("first");
    console.log("The first name is: ", firstName.value);

    let passwordElement = document.getElementById("password");
    let password = passwordElement.value;
    //pretend I validated the password and it was bad

    password = '';
    passwordElement.style.borderColor = "red";


    event.preventDefault();

    console.log("clicked submit");
    console.log(event);
}