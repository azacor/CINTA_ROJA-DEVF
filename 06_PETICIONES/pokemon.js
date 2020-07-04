const request = require ('request');

function getOnePokemon (error, response, body){
     
    const newBody = JSON.parse(body);
    console.log (newBody.name);
    console.log (response.statusCode);
    


}

request('https://pokeapi.co/api/v2/pokemon-form/1/',getOnePokemon)