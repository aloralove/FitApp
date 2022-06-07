-- Takes in #? parameters and returns an array containing the challenge you created
CREATE OR REPLACE FUNCTION create_challenge(
    ch_name challenges.ch_name%type,
    descript challenges.descript%type
) RETURNS SETOF challenges AS $$
 
DECLARE
challenge_id challenges.id%type;
 
BEGIN
INSERT INTO challenges (ch_name, descript)
VALUES (ch_name, descript)
RETURNING id INTO challenge_id;
 
RETURN QUERY
SELECT *
FROM challenges
WHERE challenges.id = challenge_id;
END;
 
$$ LANGUAGE 'plpgsql';

-- Takes in #? parameters and returns an array containing the nutrition you created
CREATE OR REPLACE FUNCTION create_nutrition(
    nu_name nutritions.nu_name%type,
    recipe challenges.descript%type
) RETURNS SETOF nutritions AS $$
 
DECLARE
nutrition_id nutritions.id%type;
 
BEGIN
INSERT INTO nutritions (nu_name, recipe)
VALUES (nu_name, recipe)
RETURNING id INTO nutrition_id;
 
RETURN QUERY
SELECT *
FROM nutritions
WHERE nutritions.id = nutrition_id;
END;
 
$$ LANGUAGE 'plpgsql';

-- Takes in #? parameters and returns an array containing the workout you created
CREATE OR REPLACE FUNCTION create_workout(
    wo_name workouts.wo_name%type
) RETURNS SETOF workouts AS $$
 
DECLARE
workid workouts.id%type;
 
BEGIN
INSERT INTO workouts (wo_name)
VALUES (wo_name)
RETURNING id INTO workid;
 
RETURN QUERY
SELECT *
FROM workouts
WHERE workouts.id = workid;
END;
 
$$ LANGUAGE 'plpgsql';


--assoc table for details to workout one to many relationship

CREATE OR REPLACE FUNCTION create_detail (
    uid permissions.workout_id%type,
    ttl details.title%type,
    dsc details.content%type) 
    RETURNS details.id%type AS $$
 
DECLARE
    detid details.id%type;
 
BEGIN
    INSERT INTO details (title, content)
    VALUES (ttl, dsc)
    RETURNING id INTO detid;

    INSERT INTO permissions (workout_id, detail_id) 
    VALUES (uid, detid);

    RETURN detid;
END;
$$
LANGUAGE 'plpgsql';


CREATE OR REPLACE FUNCTION create_permission (
    uid permissions.workout_id%type,
    detid permissions.detail_id%type) 
    
    RETURNS void AS $$
 
BEGIN
    INSERT INTO permissions(workout_id, detail_id)
    VALUES (uid, detid);

END;
$$
LANGUAGE 'plpgsql';