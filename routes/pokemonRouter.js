const express = require('express');

const pokemonController = require('../controllers/pokemonController');

const pokemonRouter = express.Router();

pokemonRouter.get('/:id/edit',);
pokemonRouter.get('/new', (req, res)=>{
    res.render('pokemon/addPokemon');
});

pokemonRouter.route('/:id')
    .get(pokemonController.getOnePokemon)
    .put(pokemonController.updatePokemon)
    .delete(pokemonController.destroy, (req, res)=>{
        res.sendStatus(200);
    });

pokemonRouter.route('/')
    .post(pokemonController.createNewPokemon)
    .get(pokemonController.showAllPokemon);



module.exports = pokemonRouter;