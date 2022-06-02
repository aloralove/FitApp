DROP TABLE IF EXISTS challenges CASCADE;
CREATE TABLE challenges (
    id bigserial PRIMARY KEY,
    ch_name VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS nutritions CASCADE;
CREATE TABLE nutritions (
    id bigserial PRIMARY KEY,
    nu_name VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS workoutss CASCADE;
CREATE TABLE workoutss (
    id bigserial PRIMARY KEY,
    wo_name VARCHAR (255) NOT NULL
);
