-- Takes in 3 parameters and returns an array containing the challenge you created
CREATE OR REPLACE FUNCTION create_challenge(
    ch_name challenges.ch_name%type
) RETURNS SETOF challenges AS $$
 
DECLARE
challenge_id challenges.id%type;
 
BEGIN
INSERT INTO challenges (ch_name)
VALUES (ch_name)
RETURNING id INTO challenge_id;
 
RETURN QUERY
SELECT *
FROM challenges
WHERE challenges.id = challenge_id;
END;
 
$$ LANGUAGE 'plpgsql';

-- Takes in 3 parameters and returns an array containing the nutrition you created
CREATE OR REPLACE FUNCTION create_nutrition(
    nu_name nutritions.nu_name%type
) RETURNS SETOF nutritions AS $$
 
DECLARE
nutrition_id nutritions.id%type;
 
BEGIN
INSERT INTO nutritions (nu_name)
VALUES (nu_name)
RETURNING id INTO nutrition_id;
 
RETURN QUERY
SELECT *
FROM nutritions
WHERE nutritions.id = nutrition_id;
END;
 
$$ LANGUAGE 'plpgsql';

-- Takes in 3 parameters and returns an array containing the workouts you created
CREATE OR REPLACE FUNCTION create_workouts(
    wo_name workoutss.wo_name%type
) RETURNS SETOF workoutss AS $$
 
DECLARE
workouts_id workoutss.id%type;
 
BEGIN
INSERT INTO workoutss (wo_name)
VALUES (wo_name)
RETURNING id INTO workouts_id;
 
RETURN QUERY
SELECT *
FROM workoutss
WHERE workoutss.id = workouts_id;
END;
 
$$ LANGUAGE 'plpgsql';