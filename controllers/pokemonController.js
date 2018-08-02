const db = require('../models/pokemon');

module.exports = {
    createNewPokemon(req, res, next){
        db.save({...req.body, creator_id: req.user.id})
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
        const { } = req.body;
        db.save({ })
        .then((newPokemon) => {
            res.locals.data = newPokemon;
            next();
        })
        .catch(e => next(e));
    },

    updatePokemon(req, res, next){
        const { } = req.body;
        const modifiedPokemon = {
            id: req.params.id,
            
            
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