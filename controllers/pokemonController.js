const db = require('../models/pokemon');

module.exports = {
    createNewPokemon(req, res, next){
        console.log(req.users);
        db.save({...req.body, users_id: 1})
        .then((pokemon)=>{
            res.redirect('/pokemon')
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

    getOnePokemon(req, res, next){
        db.findById(req.params.id)
        .then((pokemon)=>{
            res.locals.data = pokemon;
            next();
        })
        .catch(next);
    },

    addPokemon(req, res, next){
        const { name, description } = req.body;
        db.save({ name, description })
        .then((newPokemon) => {
            res.locals.data = newPokemon;
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
        db.destroy(req.params.id)
        .then(()=>{
            next();
        })
        .catch(e => next(e));
    }





};
