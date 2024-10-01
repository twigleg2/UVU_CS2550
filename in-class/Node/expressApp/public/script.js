const baseUrl = "http://localhost:3000/";


//using async/await
async function apiCallUsingAsync(event) {

    let dropdown = document.getElementById("dropdown");
    let dropdownValue = dropdown.value;
    let textbox = document.getElementById("pokemonName");
    let nameOrId = textbox.value;

    try {
        let endpoint = baseUrl + dropdownValue + nameOrId;
        let pokePromise = await fetch(endpoint);
        let pokeJson = await pokePromise.json();

        document.getElementById("pokemon").innerHTML = "You accessed data for: ";
        // document.getElementById("sprite").src = pokeJson.sprites.front_default;
        document.getElementById("sprite").src = pokeJson.sprites.animated;

    } catch (error) {

        document.getElementById("pokemon").innerHTML = "An error occurred.";
        document.getElementById("sprite").src = "";
    }
}


let submit = document.getElementById("submit");
submit.addEventListener("click", apiCallUsingAsync);