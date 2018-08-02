

module.exports = {

showAll(req, res){
    res.format({
        html(){
            res.render('pokemon_body');
        },

        json(){
            res.json(res.locals.data);
        },
    });

},

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


handleDelete(req, res){
    res.redirect('/pokemon');
},

}