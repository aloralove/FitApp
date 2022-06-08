DROP TABLE IF EXISTS challenges CASCADE;
CREATE TABLE challenges (
    id bigserial PRIMARY KEY,
    ch_name VARCHAR (255) NOT NULL,
    descript VARCHAR (789) NOT NULL,
    img VARCHAR (789) NOT NULL
);

DROP TABLE IF EXISTS nutritions CASCADE;
CREATE TABLE nutritions (
    id bigserial PRIMARY KEY,
    nu_name VARCHAR (255) NOT NULL,
    recipe VARCHAR (789) NOT NULL
);

DROP TABLE IF EXISTS workouts CASCADE;
CREATE TABLE workouts (
    id bigserial PRIMARY KEY,
    wo_name VARCHAR (255) NOT NULL
);

DROP TABLE IF EXISTS details CASCADE;
CREATE TABLE details (
  id bigserial PRIMARY KEY,
  title VARCHAR (255) NOT NULL,
  content VARCHAR (789) NOT NULL
);

DROP TABLE IF EXISTS permissions CASCADE;
CREATE TABLE permissions (
  workout_id bigserial NOT NULL REFERENCES workouts (id),
  detail_id bigserial NOT NULL REFERENCES details (id) ON DELETE CASCADE,
  
  PRIMARY KEY (workout_id, detail_id)
);