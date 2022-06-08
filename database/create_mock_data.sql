SET client_min_messages TO WARNING;


CREATE OR REPLACE PROCEDURE create_mock_data()
LANGUAGE plpgsql
AS $$

DECLARE

-- Bunch of variables ...
uidArms workouts.id%TYPE;
uidHIIT workouts.id%TYPE;
uidLegs workouts.id%TYPE;
uidFullbody workouts.id%TYPE;
uidLowerbody workouts.id%TYPE;
uidUpperbody workouts.id%TYPE;
uidBack workouts.id%TYPE;
uidYoga workouts.id%TYPE;

-- many details for each workout Arms, Legs ...
detidArms1 details.id%TYPE;
detidArms2 details.id%TYPE;
detidArms3 details.id%TYPE;

detidHIIT1 details.id%TYPE;
detidHIIT2 details.id%TYPE;
detidHIIT3 details.id%TYPE;

detidLegs1 details.id%TYPE;
detidLegs2 details.id%TYPE;
detidLegs3 details.id%TYPE;

detidFullbody1 details.id%TYPE;
detidFullbody2 details.id%TYPE;
detidFullbody3 details.id%TYPE;

detidLowerbody1 details.id%TYPE;
detidLowerbody2 details.id%TYPE;
detidLowerbody3 details.id%TYPE;

detidUpperbody1 details.id%TYPE;
detidUpperbody2 details.id%TYPE;
detidUpperbody3 details.id%TYPE;

detidBack1 details.id%TYPE;
detidBack2 details.id%TYPE;
detidBack3 details.id%TYPE;

detidYoga1 details.id%TYPE;
detidYoga2 details.id%TYPE;
detidYoga3 details.id%TYPE;


BEGIN

-- Bunch of queries ...
SELECT * FROM create_workout('Arms') INTO uidArms;
SELECT * FROM create_workout('HIIT') INTO uidHIIT;
SELECT * FROM create_workout('Legs') INTO uidLegs;
SELECT * FROM create_workout('Fullbody') INTO uidFullbody;
SELECT * FROM create_workout('Lowerbody') INTO uidLowerbody;
SELECT * FROM create_workout('Upperbody') INTO uidUpperbody;
SELECT * FROM create_workout('Back') INTO uidBack;
SELECT * FROM create_workout('Yoga') INTO uidYoga;


 ---- details for Arm workouts  ----
SELECT * FROM create_detail(uidArms, 'Incline Bicep Curl', 
    'How to: Sit on an incline bench and hold a dumbbell in each hand at arms length.
     Use your biceps to curl the dumbbell until it reaches your shoulder, then lower 
     them back down to your side and repeat.' ) 
    INTO detidArms1;

SELECT * FROM create_detail(uidArms, 'Concentration Curl', 
    'How to: Sit down on bench and rest your right arm against your right leg, 
    letting the weight hang down. Curl the weight up, pause, then lower. Repeat 
    with the other arm.' ) 
    INTO detidArms2;

SELECT * FROM create_detail(uidArms, 'Twisting Dumbbell Curl',
     'How to: Hold a dumbbell in each hand at your side with palms facing each 
     other. Use your bicep to curl the dumbbells up to your shoulders alternately, 
     twisting your palms to face your chest as you lift them. Slowly lower the dumbbells 
     back down to your side and repeat.' ) 
     INTO detidArms3;

 ----- details for HIIT workouts ----
SELECT * FROM create_detail(uidHIIT, 'Burpee Interval Workout',
     'Directions: Complete the following circuit 4 times, resting 1 minute after the burpees in each round.
    1. Pullups. Reps: As many reps as possible in 30 seconds.
    2. Jumping Jacks. Reps: 60 reps
    3. Burpees. Reps: 20' ) 
     INTO detidHIIT1;

SELECT * FROM create_detail(uidHIIT, 'Jump Rope Interval Workout', 
    'Directions: Complete the following circuit 4 times, resting 1 minute after jumping rope in each round.
    1. Mountain Climb. Reps: 45
    2. Pushups. Reps: 20-30
    3. Front Plank. Reps: 1 min
    4. Jump Rope. Reps: 1 min' ) 
    INTO detidHIIT2;

SELECT * FROM create_detail(uidHIIT, 'Resistance Band Finisher', 
    'Directions: Complete the following circuit 4 times, resting 1 minute after the curls in each round.
    1. Jump Rope. Rest: 1 min
    2. Dips. Reps: 12-15
    3. High Knees. Reps: 30 each knee
    4. Curls with Resistance Bands. Reps: 20' ) 
    INTO detidHIIT3;


 ---- details for Legs workouts ----
SELECT * FROM create_detail(uidLegs, 'Barbell Bulgarian Split Squat', 
    'How: Stand facing away from the bench, holding a barbell across your upper back. 
    Have one leg resting on the bench behind you, laces down. Squat with your standing 
    leg until the knee of your trailing leg almost touches the floor. Push up through 
    your front foot to return to the start position.' ) 
    INTO detidLegs1;

SELECT * FROM create_detail(uidLegs, 'Romanian Deadlift', 
    'How: Stand behind a grounded barbell. Bend your knees slightly to grab it, keeping 
    your shins, back and hips straight. Without bending your back, push your hips forwards to 
    lift the bar. From upright, push your hips back to lower the bar, bending your knees only slightly.' ) 
    INTO detidLegs2;

SELECT * FROM create_detail(uidLegs, 'Goblet Squat', 
    'How: Stand with your legs wider than your shoulders and hold a dumbbell with both hands in line with 
    your thighs. Stick your backside out, bend your knees and lower yourself into a squat until the dumbbell 
    touches the floor. Drive back up and repeat.' ) 
    INTO detidLegs3;


 ---- details for Fullbody workouts ----
SELECT * FROM create_detail(uidFullbody, 'Bent Over Row x 10', 
    'Hold a pair of dumbbells at your sides and hinge at the hips until your chest is 
    parallel to the floor, dumbbells hanging at your shins (A). Maintaining a flat back, 
    row both dumbbells towards your torso (B), squeeze your shoulder blades together and 
    lower under control to the start before repeating. Control the bells and avoid moving 
    your torso.' ) 
    INTO detidFullbody1;

SELECT * FROM create_detail(uidFullbody, 'Front Squat x 15', 
    'Once you’ve completed your rows perform your squats by cleaning the bells onto the 
    front of your shoulders (A). From here, drop into a front squat, until your thighs pass 
    parallel to the ground (B), before driving back up. By this point, your grip and upper 
    back may be tiring but don’t relax. Keeping your core tight throughout is crucial.' ) 
    INTO detidFullbody2;

SELECT * FROM create_detail(uidFullbody, 'Dumbbell Deadlift x 15', 
    'Finally, arrange your dumbbells on the floor just outside your feet, hinge down and grip
     them with a flat back and neutral spine (A). Engage your lats and stand upright, ‘pushing 
     the ground away’ with your feet, squeezing your glutes at the top (B). Your arms should be 
     hanging straight throughout this movement, think of them as hooks' ) 
    INTO detidFullbody3;


 ---- details for Lowerbody workouts  ----
SELECT * FROM create_detail(uidLowerbody, 'Back Squat', 
    'Step under a barbell and set a good foundation by flexing your core to lift the barbell off 
    the squat rack. Grip the barbell wherever allows you optimal shoulder mobility to get your 
    elbows under the bar. Set it either high or low on your upper back (which is personal preference), 
    unrack it, and take a few steps back. Pull the bar down into your shoulders to create tension. 
    Keep your chest up, take a deep breath in and squat down to a comfortable depth and pause for a 
    beat. Drive your feet through the floor until lockout' ) 
    INTO detidLowerbody1;

SELECT * FROM create_detail(uidLowerbody, 'Hip Thrust', 
    'How to Do the Hip Thrust. Sit with your back up against the edge of a bench that’s parallel 
    to you. With padding across your pelvis, roll a loaded barbell into the crease of your hips. Once the barbell 
    is secure, drive your feet and back towards the bench. You want your shoulder blades to be on the bench and 
    upper body and hips in a straight line. Keep your upper body steady as you lower your hips toward the ground 
    and when extending into lockout.' ) 
    INTO detidLowerbody2;

SELECT * FROM create_detail(uidLowerbody, 'Single-Leg Deadlift Romanian Deadlift', 
    'Pick one foot up off the floor, finding balance on your grounded foot, and soften your working knee. Keep 
    your chest up and shoulders down and hinge your hip back and try not to rotate the working hip upwards. Hinge until 
    your belly button is facing the floor and you feel a stretch in your hamstring. Stabilize and return to the starting 
    position and repeat. Once you feel comfortable, you can hold a dumbbell or kettlebell in one hand to add weight to the exercise.' ) 
    INTO detidLowerbody3;


 ---- details for Upperbody workouts  ----
SELECT * FROM create_detail(uidUpperbody, 'Push-Up', 
    'How to Do the Push-up. Start in a plank position with your hands stacked underneath your shoulders, your back flat, and your core tight. 
    Maintaining a straight line from your head to your heels, slowly lower your body to the floor by bending your elbows. 
    To achieve a full range of motion and to engage as many muscle fibers as possible, make sure your chest touches the floor. 
    Then, press the floor away from your hands while maintaining a tight core to avoid dipping hips. Finish in the position 
    you started in. ' ) 
    INTO detidUpperbody1;

SELECT * FROM create_detail(uidUpperbody, 'Dumbbell Pullover', 
    'How to Do the Dumbbell Pullover. Start by lying face-up on a bench with your arms extended above your chest and a 
    umbbell placed in a diamond grip (make a diamond with your hands and place the bottom of the weight plate in between). 
    With a slight bend in your elbows, slowly lower your arms until you feel a stretch in your chest and lats. Reach as 
    far as back as your shoulder mobility allows. Engage your lats to pull the weight back to the starting position.' ) 
    INTO detidUpperbody2;

SELECT * FROM create_detail(uidUpperbody, 'Bear Crawl', 
    'Start in a tabletop position with your hands directly underneath your shoulders and your knees under your hips. 
    The weight of your body should balance on your hands and toes as you hover your knees off the ground. Just like in 
    a plank, keep your back flat and core tight as you step your right hand and left foot forward, then your left hand 
    and right foot forward. Keep this pattern moving for as long as you can maintain it. ' ) 
    INTO detidUpperbody3;


 ----details for Back workouts ----
 SELECT * FROM create_detail(uidBack, 'Barbell Deadlift', 
    'How: Squat down and grasp a barbell with your hands roughly shoulder-width apart. Keep your
     chest up, pull your shoulders back and look straight ahead as you lift the bar. Focus on 
     taking the weight back onto your heels and keep the bar as close as possible to your body 
     at all times. Lift to thigh level, pause, then return under control to the start position.' ) 
    INTO detidBack1;

SELECT * FROM create_detail(uidBack, 'Barbell Bent-Over Row', 
    'How: Grab a barbell with an overhand grip, hands slightly wider than shoulder width apart. 
    With your legs slightly bent, keep your back perfectly straight and bend your upper body forward 
    until it’s almost perpendicular to the floor. From here row the weight upwards into the lower part 
    of your chest. Pause. And return under control to the start position.' ) 
    INTO detidback2;

SELECT * FROM create_detail(uidBack, 'Lat Pulldowns', 
    'How: Kneel in front of the cable machine and face away. Grab the bar with your palms facing away 
    from you, shoulder-width apart. Lean back slightly and push your chest out. Pull the bar down to your 
    chest, then return slowly to the start position. Your torso should remain still throughout.' ) 
    INTO detidback3;



 ---- details for Yoga workouts  ----
SELECT * FROM create_detail(uidYoga, 'Mountain Pose', 
    'How to do it: Stand with your feet together or hip-width apart. Ground down through the four corners 
    of your feet. Roll your shoulders away from your ears, draw your shoulder blades down your back, and 
    lift the crown of your head. Engage your thighs, draw your belly button in, and lengthen up through 
    the spine. Turn your palms facing the front of the room. Relax your jaw and unfurrow your brow. Breathe easy.' ) 
    INTO detidYoga1;

SELECT * FROM create_detail(uidYoga, 'Warrior II', 
    'How to do it: Stand with feet wide, 3–4 feet apart. Shift your right heel out so your toes are 
    pointing slightly inward. Turn your left foot out 90 degrees. Line up your left heel with the arch 
    of your right foot. Keeping both legs straight, ground through your feet. Lift arms into a T at 
    shoulder height. Reach forward with your front arm. When you can’t reach anymore, hinge at the 
    front hip. Bring your front arm down to your shin, a foam block, or the ground. Lift your back 
    arm up toward the sky and spread your fingers. Take your gaze down to the floor or up toward your lifted hand.' ) 
    INTO detidYoga2;

SELECT * FROM create_detail(uidYoga, 'Downward-Facing Dog', 
    'How to do it: From all fours, walk your hands 6 inches in front of you. Tuck your toes and 
    lift your hips up and back to lengthen your spine. If your hamstrings are tight, keep your knees 
    bent in order to bring your weight back into the legs. Spread your fingers wide, press into your 
    hands, and rotate your arms so that your biceps are facing toward one another. Press your thighs 
    back toward the wall behind you.' ) 
    INTO detidYoga3;





END;

$$;
-- Recreate our tables and functions
--\i '/create_tables.sql';
--\i '/create_functions.sql';

-- Call the procedure that creates the data
CALL create_mock_data ();

----- challenge data
SELECT * FROM create_challenge('30 days of Cardio', 
    'For 30 days do at least 45 minutes of cardio. You can choose the type of cardio. Biking, running, walking, jumping jacks...');

SELECT * FROM create_challenge('30 days of Yoga', 
    'For 30 days do at least 30 minutes of yoga. You can either do moves on your own or follow any yoga videos online. Try youtube!');

SELECT * FROM create_challenge('30 days of push-ups', 
    'On day one start as many push-ups you are comfortable with and add 1-5 push-ups to that number each day for 30 days. ');

SELECT * FROM create_challenge('30 day Bodyweight Challenge', 
    'For 30 days do at least 30 minutes of a bodyweight strength training workout.');

SELECT * FROM create_challenge('Plank Challenge', 
    'On day one do a one mintue plank and increase 15 seconds each day for 30 days.');

SELECT * FROM create_challenge('Wall sit Challenge', 
    'On day one wall sit for 30 seconds and increase by 15 seconds each day for 30 days.');

SELECT * FROM create_challenge('Core Challenge', 
    'For 30 days do 3 core moves 15 reps each. Each move can be different as long as it works the core.');

SELECT * FROM create_challenge('75 Day Challenge', 
    'Do two 45 minute workouts each day for 75 day. Drink a gallon of water a day. No eating fast food.');




---- nutrition data
SELECT * FROM create_nutrition('Limit sugary drinks', 
    'Sugary drinks like sodas, fruit juices, and sweetened teas are the primary source of added sugar
     in the American diet. Unfortunately, findings from several studies point to 
     sugar-sweetened beverages increasing risk of heart disease and type 2 diabetes, even in people 
     who are not carrying excess body fat. Sugar-sweetened beverages are also uniquely 
     harmful for children, as they can contribute not only to obesity in children but also to conditions 
     that usually do not develop until adulthood, like type 2 diabetes, high blood pressure, and non-alcoholic 
     fatty liver disease. Healthier alternatives include: water, 
     unsweetened teas, sparkling water, coffee');

SELECT * FROM create_nutrition('Eat nuts and seeds', 
    'Some people avoid nuts because they are high in fat. However, nuts and seeds are incredibly nutritious. 
    They are packed with protein, fiber, and a variety of vitamins and minerals. Nuts may help you lose weight 
    and reduce the risk of developing type 2 diabetes and heart disease. Additionally, one 
    large observational study noted that a low intake of nuts and seeds was potentially linked to an increased 
    risk of death from heart disease, stroke, or type 2 diabetes.');

SELECT * FROM create_nutrition('Avoid ultra-processed foods', 
    'Ultra-processed foods are foods containing ingredients that are significantly modified from their original 
    form. They often contain additives like added sugar, highly refined oil, salt, preservatives, artificial 
    sweeteners, colors, and flavors as well. Examples include: snack cakes, fast food, frozen meals, canned foods, 
    chips Ultra-processed foods are highly palatable, meaning they are easily overeaten, and activate reward-related 
    regions in the brain, which can lead to excess calorie consumption and weight gain.');

SELECT * FROM create_nutrition('Don’t fear coffee', 
    'Despite some controversy over it, coffee is loaded with health benefits. It’s rich in antioxidants, 
    and some studies have linked coffee intake to longevity and a reduced risk of type 2 diabetes, Parkinson’s 
    and Alzheimer’s diseases, and numerous other illnesses. The most beneficial intake amount appears to 
    be 3–4 cups per day. However, it’s best to consume coffee and any caffeine-based items in 
    moderation. Excessive caffeine intake may lead to health issues like insomnia and heart palpitations. 
    To enjoy coffee in a safe and healthy way, keep your intake to less than 4 cups per day and 
    avoid high-calorie, high-sugar additives like sweetened creamer.');

SELECT * FROM create_nutrition('Eat fatty fish', 
    'Fish is a great source of high-quality protein and healthy fat. This is particularly true of fatty 
    fish, such as salmon, which is loaded with anti-inflammatory omega-3 fatty acids and various 
    other nutrients. Studies show that people who eat fish regularly have a lower risk for several 
    conditions, including heart disease, dementia, and inflammatory bowel disease.');

SELECT * FROM create_nutrition('Get enough sleep', 
    'The importance of getting enough quality sleep cannot be overstated. Poor sleep can drive insulin 
    resistance, can disrupt your appetite hormones, and reduce your physical and
    mental performance. What’s more, poor sleep is one of the strongest individual risk factors for
    weight gain and obesity. People who do not get enough sleep tend to make food choices that are higher 
    in fat, sugar, and calories, potentially leading to unwanted weight gain.');

SELECT * FROM create_nutrition('Stay hydrated', 
    'Hydration is an important and often overlooked marker of health. Staying hydrated helps 
    ensure that your body is functioning optimally and that your blood volume is sufficient. 
    Drinking water is the best way to stay hydrated, as it’s free of calories, sugar, and additives. 
    Although there’s no set amount that everyone needs per day, aim to drink enough so that your 
    thirst is adequately quenched.');

SELECT * FROM create_nutrition('Take vitamin D if you’re deficient', 
    'Most people do not get enough vitamin D. While these widespread vitamin D inadequacies are not 
    imminently harmful, maintaining adequate vitamin D levels can help to optimize your health by 
    improving bone strength, reducing symptoms of depression, strengthening your immune system, and 
    lowering your risk for cancer. If you do not spend a lot of time in the sunlight, your vitamin D 
    levels may be low. If you have access, it’s a great idea to have your levels tested, so that you 
    can correct your levels through vitamin D supplementation if necessary.');