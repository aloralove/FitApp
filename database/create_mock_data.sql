SET client_min_messages TO WARNING;


CREATE OR REPLACE PROCEDURE create_mock_data()
LANGUAGE plpgsql
AS $$

DECLARE

-- Bunch of variables ...
uid1 workouts.id%TYPE;
uid2 workouts.id%TYPE;
uid3 workouts.id%TYPE;
uid4 workouts.id%TYPE;
uid5 workouts.id%TYPE;
uid6 workouts.id%TYPE;
uid7 workouts.id%TYPE;
uid8 workouts.id%TYPE;

detid1 details.id%TYPE;
detid2 details.id%TYPE;
detid3 details.id%TYPE;
detid4 details.id%TYPE;
detid5 details.id%TYPE;
detid6 details.id%TYPE;
detid7 details.id%TYPE;
detid8 details.id%TYPE;

BEGIN

-- Bunch of queries ...
SELECT * FROM create_workout('Arms') INTO uid1;
SELECT * FROM create_workout('HIIT') INTO uid2;
SELECT * FROM create_workout('Legs') INTO uid3;
SELECT * FROM create_workout('Fullbody') INTO uid4;
SELECT * FROM create_workout('Lowerbody') INTO uid5;
SELECT * FROM create_workout('Upperbody') INTO uid6;
SELECT * FROM create_workout('Back') INTO uid7;
SELECT * FROM create_workout('Yoga') INTO uid8;



SELECT * FROM create_detail(uid1, 'title', 'descript' ) INTO detid1;
SELECT * FROM create_detail(uid2, 'title', 'descript' ) INTO detid2;
SELECT * FROM create_detail(uid3, 'title', 'descript' ) INTO detid3;
SELECT * FROM create_detail(uid4, 'title', 'descript' ) INTO detid4;
SELECT * FROM create_detail(uid5, 'title', 'descript' ) INTO detid5;
SELECT * FROM create_detail(uid6, 'title', 'descript' ) INTO detid6;
SELECT * FROM create_detail(uid7, 'title', 'descript' ) INTO detid7;
SELECT * FROM create_detail(uid8, 'title', 'descript' ) INTO detid8;



END;

$$;
-- Recreate our tables and functions
--\i '/create_tables.sql';
--\i '/create_functions.sql';

-- Call the procedure that creates the data
CALL create_mock_data ();


SELECT * FROM create_challenge('30 days of Cardio', '1descript');
SELECT * FROM create_challenge('30 days of Yoga', '2descript');
SELECT * FROM create_challenge('30 days of push-ups', '3descript');
SELECT * FROM create_challenge('30 day Bodyweight Challenge', '4descript');
SELECT * FROM create_challenge('Plank Challenge', '5descript');
SELECT * FROM create_challenge('Squat Challenge', '6descript');
SELECT * FROM create_challenge('Jiggle FREE July Challenge', '7descript');
SELECT * FROM create_challenge('75 Day Challenge', '8descript');

SELECT * FROM create_nutrition('Green Smoothie', '1recipe');
SELECT * FROM create_nutrition('Chicken Burger with Sun-Dried Tomato Aioli', '2recipe');
SELECT * FROM create_nutrition('Oatmeal Pancakes With Cinnamon Apples', '3recipe');
SELECT * FROM create_nutrition('Spicy Grilled Calamari Salad', '4recipe');
SELECT * FROM create_nutrition('Crispy Chipotle Shrimp Quesadilla', '5recipe');
SELECT * FROM create_nutrition('Takeout-Level Chicken Fried Rice', '6recipe');
SELECT * FROM create_nutrition('Oatmeal With Peanut Butter and Banana', '7recipe');
SELECT * FROM create_nutrition('Protein Pancakes', '8recipe');