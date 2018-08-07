// models' functions will be needed for the controller

const db = require('../config/conn');

module.exports = {
    findAllPokemon(){
        return db.many(`
        SELECT *
        FROM pokemon 
        ORDER BY id ASC`)
    },

    findPokemonTeam(){
        return db.many(`
        SELECT * 
        FROM pokemon_team`)
    },



    findOne(pokemon){
        return db.one(`
        SELECT *
        FROM pokemon_team
        WHERE pokemon_team.id = $1
        `, pokemon);
    },

    saveTheInfo(pokemon){
        return db.one(`
        INSERT INTO pokemon_db (name, url)
        VALUES ($/name/, $/url/)
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
        DELETE FROM pokemon_team
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

    updatePokemon(id, pokemon){
        return db.one(`
        UPDATE pokemon_team
        SET pokemon_name = $2,
            pokemon_description = $3
        WHERE id = $1
        RETURNING *
        `, [id, pokemon.name, pokemon.description]);
    },

};