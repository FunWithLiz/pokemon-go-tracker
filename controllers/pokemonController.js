const db = require('../models/pokemon');

module.exports = {
    createNewPokemon(req, res, next){
        db.save({...req.body, users_id: 1})
        .then((pokemon)=>{
            // res.redirect('/pokemon')
        })
        .catch(e => next(e));
    },

   

    showAllPokemon(req, res, next){
        db.findAllPokemon()
        .then((pokemon)=> {
            res.locals.data = pokemon;
            next();
        })
        .catch(e => next(e));
    },

   
    showPokemonTeam(req, res, next){
        db.findPokemonTeam()
        .then((pokemonteam)=>{
            res.locals.data=pokemonteam;
            next();
        })
        .catch(e => next(e));
    },

    addPokemon(req, res, next){
        
        db.saveTeam(req.body)
        .then(() => {

            res.redirect("/pokemon/pokemon_team/");
            next();
        })
        .catch(e => next(e));
    },

    updatePokemon(req, res, next){
        const { name, description } = req.body;
        const modifiedPokemon = {
            id: req.params.id,
            name,
            description,
        };

        db.update(modifiedPokemon)
        .then((pokemon)=>{
            res.locals.data = pokemon;
            next();
        })
        .catch(e => next(e));
    },

    destroy(req, res, next){
        console.log(req);
        db.destroy(req.params.id)
        .then(()=>{
            next();
        })
        .catch(e => next(e));
    }





};
