const express = require('express');

const pokemonController = require('../controllers/pokemonController');
const viewsController = require('../controllers/viewsController');

const pokemonRouter = express.Router();

//renders the createNew_pokemon.ejs file once the user submits a new pokemon
pokemonRouter.get('/new', (req, res)=>{
    res.render('createNew_pokemon')
}); 

//shows the list of pokemon that you submitted
pokemonRouter.route('/pokemon_team')
.get(pokemonController.showPokemonTeam, viewsController.showPokemonTeam)
.post(pokemonController.addPokemon, viewsController.showPokemonTeam);


//shows the update after submitting the edit/also deletes too
pokemonRouter.route('/:id')
    .get(pokemonController.findOnePokemon)
    .put(pokemonController.updatePokemon, pokemonController.showPokemonTeam, viewsController.showPokemonTeam)
    .delete(pokemonController.destroy, (req,res) => {
        res.redirect('/pokemon/pokemon_team');
    });

// shows all the pokemon from my database
pokemonRouter.route('/')
.get(pokemonController.showAllPokemon, viewsController.showAllPokemon)


module.exports = pokemonRouter;