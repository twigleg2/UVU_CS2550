const baseUrl = "https://pokeapi.co/api/v2/";
const pokemon = baseUrl + "pokemon/"; //{id or name}
const move = baseUrl + "move/"; //{id or name}
const item = baseUrl + "item/"; //{id or name}
const berry = baseUrl + "berry/"; //{id or name}



//using then
function apiCallUsingThen(nameOrId) {
    fetch(pokemon + nameOrId)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            document.getElementById("pokemon").innerHTML = "You accessed data for: ";
            // document.getElementById("sprite").src = json.sprites.front_default;
            document.getElementById("sprite").src = json.sprites.other["official-artwork"].front_default;

        });
}


//using async/await
async function apiCallUsingAsync(event) {
    event.preventDefault();

    let textbox = document.getElementById("pokemonName");
    let nameOrId = textbox.value;
    let dropdown = document.getElementById("dropDown");
    let dropdownValue = dropdown.value;
    let endpoint = pokemon;


    try {

        switch (dropdownValue) {
            case "pokemon": {
                endpoint = pokemon;
                let pokePromise = await fetch(endpoint + nameOrId);
                let pokeJson = await pokePromise.json();

                document.getElementById("pokemon").innerHTML = "You accessed data for: ";
                // document.getElementById("sprite").src = pokeJson.sprites.front_default;
                document.getElementById("sprite").src = pokeJson.sprites.other["official-artwork"].front_default;
                break;
            }
            case "move": {
                endpoint = move;
                break;
            }
            case "item": {
                endpoint = item;
                let pokePromise = await fetch(endpoint + nameOrId);
                let pokeJson = await pokePromise.json();
                document.getElementById("pokemon").innerHTML = "You accessed data for: ";
                document.getElementById("sprite").src = pokeJson.sprites.default;
                break;
            }
            case "berry": {
                endpoint = berry;
            }
            default: {
                endpoint = pokemon;
            }
        }



    } catch (error) {

        document.getElementById("pokemon").innerHTML = "An error occured. it's likely the pokemon you are trying to access does not exist";
        document.getElementById("sprite").src = "";
    }
}

// apiCallUsingThen("ditto");
// apiCallUsingAsync(360);

// fetch("https://www.boredapi.com/api/activity?key=5881028")


let submit = document.getElementById("submit");
submit.addEventListener("click", apiCallUsingAsync);

