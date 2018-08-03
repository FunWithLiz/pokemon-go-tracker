const db = require('../config/conn');

module.exports = {
    findAllPokemon(){
        console.log('Im in the model!');
        return db.many(`
        SELECT *
        FROM pokemon`)
    },

    findPokemonTeam(){
        return db.many(`
        SELECT * 
        FROM pokemon_team`)
    },

    

    save(pokemon){
        return db.one(`
        INSERT INTO pokemon (name)
        VALUES ($/name/)
        RETURNING *
        `, pokemon);
    },


    saveTeam(pokemon_team){
        debugger;
        return db.one(`
        INSERT INTO pokemon_team (pokemon_name, pokemon_description)
        VALUES ($/name/, $/description/)
        RETURNING *
        `, pokemon_team)
    },

    destroy(id){
        return db.none(`
        DELETE FROM pokemon
        WHERE id = $1
        `, id);
    },

    addPokemon(pokemonName, type){
        return db.one(`
        INSERT INTO pokemon (name, description)
        VALUES ($1, $2)
        RETURNING *
        `, [pokemonName, type]);
    },



};