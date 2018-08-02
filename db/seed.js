// @author: Bo --helped with my loopPokemon function

const pokemon = require('../models/Pokemon.js');
const fetch = require('node-fetch');


const checkOK = (resp) => {
    if(!resp.ok){
        throw Error(resp.statusText);
    }
    return resp.json();
};

function loopPokemon(){
    return fetch('https://pokeapi.co/api/v2/pokemon-species/?limit=151')
    .then(checkOK)
    .then(data => {
        // console.log(data.results)
        for(let i = 0; i < data.results.length; i+=1){
            pokemon.save(data.results[i]);
        }
    })
}



loopPokemon();