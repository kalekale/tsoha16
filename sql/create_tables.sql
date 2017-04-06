CREATE TABLE Kayttaja(
id SERIAL PRIMARY KEY,
name varchar(50) NOT NULL,
password varchar(50) NOT NULL,
admin boolean NOT NULL
);

CREATE TABLE Aihealue(
id SERIAL PRIMARY KEY,
nimi varchar(50) NOT NULL
);

CREATE TABLE Aihe(
id SERIAL PRIMARY KEY,
aihealue INTEGER REFERENCES Aihealue(id),
kayttaja_id INTEGER REFERENCES Kayttaja(id),
otsikko varchar(50) NOT NULL
);

CREATE TABLE Viesti(
id SERIAL PRIMARY KEY,
kayttaja_id INTEGER REFERENCES Kayttaja(id),
aihe_id INTEGER REFERENCES Aihe(id),
viesti varchar(10000) NOT NULL
);

CREATE TABLE Luettu(
id SERIAL PRIMARY KEY,
kayttaja_id INTEGER REFERENCES Kayttaja(id),
aihe_id INTEGER REFERENCES Aihe(id),
kuettu boolean NOT NULL
);
