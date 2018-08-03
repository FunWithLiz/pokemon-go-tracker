

module.exports = {


showAllPokemon(req, res){
    res.format({
        html(){
            res.render('showAll_pokemon');
        },

        json(){
            res.json(res.locals.data);
        }
    });
},

showPokemonTeam(req, res){
    res.format({
        html(){
            res.render('pokemon_team');
        },
        json(){
            res.json(res.locals.data);
        }
    });
},

createNewPokemon(req, res){
    res.format({
        html(){
            res.render('createNew_pokemon');
        },
        json(){
            res.json(res.locals.data);
        }
    });
},


handleDelete(req, res){
    res.redirect('/pokemon');
},

}