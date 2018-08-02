DROP TABLE IF EXISTS pokemon_types;
DROP TABLE IF EXISTS pokemon;
DROP TABLE IF EXISTS types;
DROP TABLE IF EXISTS user;

CREATE TABLE user (
    id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password_digest VARCHAR(255) NOT NULL,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON user (username);

CREATE TABLE pokemon(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255),
    description VARCHAR(1024),
    user_id REFERENCE,
    date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON pokemon (name);
CREATE INDEX ON pokemon (date_created);

CREATE TABLE types(
    id SERIAL PRIMARY KEY,
    type VARCHAR(255),
    unique_id INT
);

CREATE TABLE pokemon_types(
    id SERIAL PRIMARY KEY,
    pokemon_id REFERENCE,
    type_id REFERENCE
);