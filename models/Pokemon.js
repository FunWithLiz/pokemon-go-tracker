const db = require('../config/conn');

module.exports = {
    findAllPokemon(){
        console.log('Im in the model!');
        return db.many(`
        SELECT 
        p.id,
        p.users_id,
        p.description,
        t.type AS type,
        u.username AS creator
      FROM pokemon p
      LEFT JOIN pokemon_types x
        ON (x.pokemon_id = p.id)
      LEFT JOIN types t
        ON (x.type_id = t.id)
      LEFT JOIN users u
        ON (u.id = p.users_id)
      ORDER BY t.type`)
    },

    findById(id){
        return db.one(`
        SELECT
        p.id,
        p.user_id,
        p.description,
        t.type AS type,
        u.username AS creator
      FROM pokemon p
      LEFT JOIN pokemon_types x
        ON p.id = x.pokemon_id
      LEFT JOIN types t
        ON t.id = x.type_id
      WHERE p.id = $1
        `, id);
    },

    save(pokemon){
        return db.one(`
        INSERT INTO pokemon (name)
        VALUES ($/name/)
        RETURNING *
        `, pokemon);
    },

    destroy(id){
        return db.none(`
        DELETE FROM pokemon
        WHERE id = $1
        `, id);
    },

    addPokemon(pokemonId, typeId){
        return db.one(`
        INSERT INTO pokemon_types (pokemon_id, types_id)
        VALUES ($1, $2
        RETURNING *
        `, [pokemonId, typeId]);
    },

    removeType(pokemonId, typeId){
        return db.none(`
        DELETE FROM pokemon_types
        WHERE pokemon_id = $1 
        AND type_id = $2
        `, [pokemonId, typeId]);
    },



};