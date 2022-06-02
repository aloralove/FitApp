import bodyParser from 'body-parser'
import cors from 'cors'
import express, { NextFunction, Request, Response } from 'express'
import Pool from 'pg'
 
const pool = new Pool.Pool({
  user: "postgres",
  host: "localhost",
  database: "fitdb",
  password: "data123",
  port: 5432
})


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
router.post('/challenges', createChallengesList)
router.delete('/challenge/:challengeID', deleteChallengesList)
router.get('/challenge/:challengeID', getChallengesList)
router.get('/challenges', getChallengesLists)
router.put('/challenge/:challengeID', updateChallengesList)
 
async function createChallengesList(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM challenges;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function deleteChallengesList(request: Request, response: Response, next: NextFunction) {
  const challengeID = parseInt(request.params.challengeID)
 
  pool.query('DELETE FROM challenges WHERE id = $1;', [challengeID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

async function getChallengesList(request: Request, response: Response, next: NextFunction) {
  const challengeID = parseInt(request.params.challengeID)
 
  pool.query('SELECT * FROM challenges WHERE id = $1;', [challengeID]).then(
    query => response.status(200).json(query.rows[0])
  )
}
 
async function getChallengesLists(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM challenges;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function updateChallengesList(request: Request, response: Response, next: NextFunction) {
  const challengeID = parseInt(request.params.challengeID)
 
  pool.query('UPDATE challenges WHERE id = $1;', [challengeID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

//nutrition
router.post('/nutritions', createNutritionList)
router.delete('/nutrition/:nutritionID', deleteNutritionList)
router.get('/nutrition/:nutritionID', getNutritionList)
router.get('/nutritions', getNutritionLists)
router.put('/nutrition/:nutritionID', updateNutritionList)


async function createNutritionList(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM nutritions;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function deleteNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionID = parseInt(request.params.nutritionID)
 
  pool.query('DELETE FROM nutritions WHERE id = $1;', [nutritionID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

async function getNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionID = parseInt(request.params.nutritionID)
 
  pool.query('SELECT * FROM nutritions WHERE id = $1;', [nutritionID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

async function getNutritionLists(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM nutritions;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function updateNutritionList(request: Request, response: Response, next: NextFunction) {
  const nutritionID = parseInt(request.params.nutritionID)
 
  pool.query('UPDATE nutritions WHERE id = $1;', [nutritionID]).then(
    query => response.status(200).json(query.rows[0])
  )
}


//workouts 
router.post('/workoutss', createWorkouts)
router.delete('/workouts/:workoutsID', deleteWorkouts)
router.get('/workouts/:workoutsID', getWorkouts)
router.get('/workoutss', getWorkoutss)
router.put('/workouts/:workoutsID', updateWorkouts)


async function createWorkouts(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM workoutss;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function deleteWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
 
  pool.query('DELETE FROM workoutss WHERE id = $1;', [workoutsID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

async function getWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
 
  pool.query('SELECT * FROM workoutss WHERE id = $1;', [workoutsID]).then(
    query => response.status(200).json(query.rows[0])
  )
}

async function getWorkoutss(request: Request, response: Response, next: NextFunction) {
  pool.query('SELECT * FROM workoutss;', []).then(
    query => response.status(200).json(query.rows)
  )
}

async function updateWorkouts(request: Request, response: Response, next: NextFunction) {
  const workoutsID = parseInt(request.params.workoutsID)
 
  pool.query('UPDATE workoutss WHERE id = $1;', [workoutsID]).then(
    query => response.status(200).json(query.rows[0])
  )
}