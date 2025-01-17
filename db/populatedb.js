const { Client } = require("pg")
require("dotenv").config()

const SQL = `
CREATE TABLE IF NOT EXISTS leagues (
    league_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    league_name VARCHAR (255),
    country VARCHAR (255)
);

INSERT INTO leagues (league_name, country)
VALUES ('Serie A', 'Italy'), ('Bundesliga', 'Germany');

`

const SQL1 = `

CREATE TABLE IF NOT EXISTS teams (
    team_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    team_name VARCHAR (255),
    league_id INTEGER REFERENCES leagues(league_id)
);

INSERT INTO teams (team_name, league_id)
VALUES ('Inter Milan', 1), ('FC Bayern', 2);
`

const SQL2 = `
CREATE TABLE IF NOT EXISTS players (
    player_id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    player_name VARCHAR(255),
    position player_position,
    team_id INTEGER REFERENCES teams(team_id)
);

INSERT INTO players (player_name, position, team_id)
VALUES ('Lautaro Martinez', 'ATT', 1), ('Manuel Neuer', 'GK', 2);
`

async function main() {
    console.log("seeding...")
    const client = new Client({
        connectionString: `postgresql://${process.env.USER}:${process.env.PASSWORD}@localhost:5432/inventory_app`,
    })
    await client.connect()
    await client.query(SQL)
    await client.query(SQL1)
    await client.query(SQL2)
    await client.end()
    console.log("done")
}

main()