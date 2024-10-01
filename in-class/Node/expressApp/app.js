require("dotenv").config;  //loads all values in the .env file
const express = require("express");
const app = express();
const port = 3000;
const Pokedex = require('pokedex'),
    pokedex = new Pokedex();

app.use(express.json());
app.use(express.static('public'));

// app.get('/', function (req, res) {
//     res.send('usage: {domain}/{id or name}');
// })

app.get("/name/:name", async (req, res) => {
    try {
        let pokemonData = pokedex.pokemon(req.params.name);
        res.json(pokemonData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

app.get("/id/:id", async (req, res) => {
    try {
        let pokemonData = pokedex.pokemon(Number(req.params.id));
        res.json(pokemonData);
    }
    catch (err) {
        res.status(500).json(err);
    }
})

app.listen(port, () => console.log("Server started on port " + port));


/*
NOTE:
res.send() and res.json() are very nearly the same thing.  
The one important difference is that anything given to res.json() which is not already in JSON format will be wrapped up in json.

*/