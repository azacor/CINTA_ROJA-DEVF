const request = require ('request');

function getOnePokemon (error, response, body){
     
    const newBody = JSON.parse(body);
    console.log (newBody.pokemon_species);
    console.log (response.statusCode);
    


}

request('https://pokeapi.co/api/v2/generation/1/',getOnePokemon)

getOnePokemon()
    .then (())