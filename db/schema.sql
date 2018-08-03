DROP TABLE IF EXISTS pokemon_types;
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pokemon_team;

CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON users(username);


-- on delete cascade => whatever data is deleted, it will also delete 
-- the attached data on other tables

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1024),
    users_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON pokemon (name);
CREATE INDEX ON pokemon (date_created);

CREATE TABLE types(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255)
);

CREATE TABLE pokemon_types(
    id SERIAL PRIMARY KEY,
    pokemon_id INTEGER REFERENCES pokemon (id) ON DELETE CASCADE,
    type_id INTEGER REFERENCES types (id) ON DELETE CASCADE
);

CREATE TABLE pokemon_team(
    id SERIAL PRIMARY KEY,
    pokemon_name VARCHAR(255),
    pokemon_description VARCHAR(1024)
)