const express = require('express');

const pokemonController = require('../controllers/pokemonController');
const viewsController = require('../controllers/viewsController');

const pokemonRouter = express.Router();

pokemonRouter.get('/new', (req, res)=>{
    res.render('createNew_pokemon')
});

pokemonRouter.get('/:id/edit', pokemonController.findOnePokemon)


pokemonRouter.route('/pokemon_team')
.get(pokemonController.showPokemonTeam, viewsController.showPokemonTeam)
.post(pokemonController.addPokemon, viewsController.showPokemonTeam);

pokemonRouter.route('/:id')
    .get(pokemonController.findOnePokemon)
    .put(pokemonController.updatePokemon, pokemonController.showPokemonTeam, viewsController.showPokemonTeam)
    .delete(pokemonController.destroy, (req,res) => {
        res.redirect('/pokemon/pokemon_team');
    });

pokemonRouter.route('/')
.get(pokemonController.showAllPokemon, viewsController.showAllPokemon)


module.exports = pokemonRouter;