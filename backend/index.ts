import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'

const app = express()
const router = express.Router()
const port = 3000
const rootFilePath = './assets'

app.use(cors({ origin: "http://localhost:4200" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(router)

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

router.get('/', (request: Request, response: Response) => {
  response.json({ info: 'Karta Software Node.js, Express, and Postgres API. YAY!!' })
})

//router.get('/logo', async (request: Request, response: Response) => {
//  await response.download(`${rootFilePath}/logo.png`, 'myLogo.png')
//})

//users
type User = {
  id: number
  firstName: string
  lastName: string
  email: string
}

const users: User[] = [
  {
    id: 0,
    firstName: 'Jo',
    lastName: 'Smith',
    email: 'jo.smith@gmail.com'
  },
  {
    id: 1,
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@gmail.com'
  },
  {
    id: 2,
    firstName: 'Bob',
    lastName: 'Brown',
    email: 'bob.brown@gmail.com'
  },
]

router.post('/user', createUser)
router.delete('/user/:userID', deleteUser)
router.get('/user/:userID', getUser)
router.get('/users', getUsers)
router.put('/user/:userID', updateUser)

/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */

async function createUser(request: Request, response: Response, next: NextFunction) {
  const user = request.body as User
  const randomID = parseInt(crypto.randomUUID())

  user.id = randomID

  users.push(user)

  response.status(201).json(user)
}

async function deleteUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const userIndex = users.findIndex(user => user.id == userID)

  if (userIndex > -1) {
    users.splice(userIndex, 1)

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}

async function getUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const user: User = users.find(user => user.id == userID)

  if (user) {
    response.status(200).json(user)
  } else {
    response.status(404).send()
  }
}

async function getUsers(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(users)
}

async function updateUser(request: Request, response: Response, next: NextFunction) {
  const userID = parseInt(request.params.userID)
  const userIndex = users.findIndex(user => user.id == userID)
  const user = request.body as User

  if (userIndex > -1) {
    users[userIndex] = user

    response.status(200).send()
  } else {
    response.status(404).send()
  }
}



//challenges
type ChallengesList = {
    id: number
    name: string
}

const challengesLists: ChallengesList[] = [
    {
         id: 10,
        name: 'BACKEND!!! 30 days of Cardio' 
    },
    { 
        id: 11, 
        name: '30 days of Yoga' 
    },
    { 
        id: 12, 
        name: '30 days of push-ups' 
    },
    {
        id: 13,
        name: '30 day Bodyweight Challenge' 
    },
    {
        id: 14,
        name: 'Plank Challenge' 
    },
    {
        id: 15, 
        name: 'Squat Challenge' 
    },
    { 
        id: 16, 
        name: 'Jiggle FREE July Challenge' 
    },
    {
        id: 17, 
        name: '75 Day Challenge' 
    },
]

router.post('/challengesList', createChallengesList)
router.delete('/challengesList/:challengesListID', deleteChallengesList)
router.get('/challengesList/:challengesListID', getChallengesList)
router.get('/challengesLists', getChallengesLists)
router.put('/challengesList/:challengesListID', updateChallengesList)

/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */

async function createChallengesList(request: Request, response: Response, next: NextFunction) {
    const challengesList = request.body as ChallengesList
    const randomID = parseInt(crypto.randomUUID())

    challengesList.id = randomID

    challengesLists.push(challengesList)

    response.status(201).json(challengesList)
}

async function deleteChallengesList(request: Request, response: Response, next: NextFunction) {
    const challengesListID = parseInt(request.params.challengesListID)
    const challengesListIndex = challengesLists.findIndex(challengesList => challengesList.id == challengesListID)

    if (challengesListIndex > -1) {
        challengesLists.splice(challengesListIndex, 1)

        response.status(200).send()
    } else {
        response.status(404).send()
    }
}

async function getChallengesList(request: Request, response: Response, next: NextFunction) {
    const challengesListID = parseInt(request.params.challengesListID)
    const challengesList: ChallengesList = challengesLists.find(challengesList => challengesList.id == challengesListID)

    if (challengesList) {
        response.status(200).json(challengesList)
    } else {
        response.status(404).send()
    }
}

async function getChallengesLists(request: Request, response: Response, next: NextFunction) {
    response.status(200).json(challengesLists)
}

async function updateChallengesList(request: Request, response: Response, next: NextFunction) {
    const challengesListID = parseInt(request.params.challengesListID)
    const challengesListIndex = challengesLists.findIndex(challengesList => challengesList.id == challengesListID)
    const challengesList = request.body as ChallengesList

    if (challengesListIndex > -1) {
        challengesLists[challengesListIndex] = challengesList

        response.status(200).send()
    } else {
        response.status(404).send()
    }
}


//nutrition
type NutritionList = {
  id: number
  name: string
  recipe: string
}

const nutritionLists: NutritionList[] = [
  { id: 21, name: 'BACKEND!!! Green Smoothie', recipe: "Green stuff"},
  { id: 22, name: 'Chicken Burger with Sun-Dried Tomato Aioli', recipe: "Chicken stuff" },
  { id: 23, name: 'Oatmeal Pancakes With Cinnamon Apples', recipe: "Oatmeal stuff" },
  { id: 24, name: 'Spicy Grilled Calamari Salad', recipe: "Calamari stuff" },
  { id: 25, name: 'Crispy Chipotle Shrimp Quesadilla' , recipe: "Chipotle stuff" },
  { id: 26, name: 'Takeout-Level Chicken Fried Rice' , recipe: "Fried Rice stuff" },
  { id: 27, name: 'Oatmeal With Peanut Butter and Banana', recipe: "Peanut Butter jelly time stuff" },
  { id: 28, name: 'Protein Pancakes', recipe: "Pancakes stuff" },
]

router.post('/nutritionList', createNutritionList)
router.delete('/nutritionList/:nutritionListID', deleteNutritionList)
router.get('/nutritionList/:nutritionListID', getNutritionList)
router.get('/nutritionLists', getNutritionLists)
router.put('/nutritionList/:nutritionListID', updateNutritionList)

/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */

async function createNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionList = request.body as NutritionList
  const randomID = parseInt(crypto.randomUUID())

  nutritionList.id = randomID

  nutritionLists.push(nutritionList)

  response.status(201).json(nutritionList)
}

async function deleteNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionListID = parseInt(request.params.nutritionListID)
  const nutritionListIndex = nutritionLists.findIndex(nutritionList => nutritionList.id == nutritionListID)

  if (nutritionListIndex > -1) {
      nutritionLists.splice(nutritionListIndex, 1)

      response.status(200).send()
  } else {
      response.status(404).send()
  }
}

async function getNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionListID = parseInt(request.params.nutritionListID)
  const nutritionList: NutritionList = nutritionLists.find(nutritionList => nutritionList.id == nutritionListID)

  if (nutritionList) {
      response.status(200).json(nutritionList)
  } else {
      response.status(404).send()
  }
}

async function getNutritionLists(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(nutritionLists)
}

async function updateNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionListID = parseInt(request.params.nutritionListID)
  const nutritionListIndex = nutritionLists.findIndex(nutritionList => nutritionList.id == nutritionListID)
  const nutritionList = request.body as NutritionList

  if (nutritionListIndex > -1) {
      nutritionLists[nutritionListIndex] = nutritionList

      response.status(200).send()
  } else {
      response.status(404).send()
  }
}




//workouts 
type Workouts = {
  id: number
  name: string
}

const workoutss: Workouts[] = [
  { id: 1, name: 'BACKEND!!!!!!! Arms' },
  { id: 2, name: 'HIIT' },
  { id: 3, name: 'Legs' },
  { id: 4, name: 'Fullbody' },
  { id: 5, name: 'Lowerbody' },
  { id: 6, name: 'Upperbody' },
  { id: 7, name: 'Back' },
  { id: 8, name: 'Yoga' },
]

router.post('/workouts', createWorkouts)
router.delete('/workouts/:workoutsID', deleteWorkouts)
router.get('/workouts/:workoutsID', getWorkouts)
router.get('/workoutss', getWorkoutss)
router.put('/workouts/:workoutsID', updateWorkouts)

/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */

async function createWorkouts(request: Request, response: Response, next: NextFunction) {
  const workouts = request.body as Workouts
  const randomID = parseInt(crypto.randomUUID())

  workouts.id = randomID

  workoutss.push(workouts)

  response.status(201).json(workouts)
}

async function deleteWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
  const workoutsIndex = workoutss.findIndex(workouts => workouts.id == workoutsID)

  if (workoutsIndex > -1) {
      workoutss.splice(workoutsIndex, 1)

      response.status(200).send()
  } else {
      response.status(404).send()
  }
}

async function getWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
  const workouts: Workouts = workoutss.find(workouts => workouts.id == workoutsID)

  if (workouts) {
      response.status(200).json(workouts)
  } else {
      response.status(404).send()
  }
}

async function getWorkoutss(request: Request, response: Response, next: NextFunction) {
  response.status(200).json(workoutss)
}

async function updateWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
  const workoutsIndex = workoutss.findIndex(workouts => workouts.id == workoutsID)
  const workouts = request.body as Workouts

  if (workoutsIndex > -1) {
      workoutss[workoutsIndex] = workouts

      response.status(200).send()
  } else {
      response.status(404).send()
  }
}