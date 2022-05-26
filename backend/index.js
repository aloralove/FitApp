"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const router = express_1.default.Router();
const port = 3000;
const rootFilePath = './assets';
app.use((0, cors_1.default)({ origin: "http://localhost:4200" }));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use(router);
app.listen(port, () => {
    console.log(`App running on port ${port}.`);
});
router.get('/', (request, response) => {
    response.json({ info: 'Karta Software Node.js, Express, and Postgres API' });
});
const users = [
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
];
router.post('/user', createUser);
router.delete('/user/:userID', deleteUser);
router.get('/user/:userID', getUser);
router.get('/users', getUsers);
router.put('/user/:userID', updateUser);
/** List of HTTP response status codes https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses */
function createUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = request.body;
        const randomID = parseInt(crypto.randomUUID());
        user.id = randomID;
        users.push(user);
        response.status(201).json(user);
    });
}
function deleteUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userID = parseInt(request.params.userID);
        const userIndex = users.findIndex(user => user.id == userID);
        if (userIndex > -1) {
            users.splice(userIndex, 1);
            response.status(200).send();
        }
        else {
            response.status(404).send();
        }
    });
}
function getUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userID = parseInt(request.params.userID);
        const user = users.find(user => user.id == userID);
        if (user) {
            response.status(200).json(user);
        }
        else {
            response.status(404).send();
        }
    });
}
function getUsers(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        response.status(200).json(users);
    });
}
function updateUser(request, response, next) {
    return __awaiter(this, void 0, void 0, function* () {
        const userID = parseInt(request.params.userID);
        const userIndex = users.findIndex(user => user.id == userID);
        const user = request.body;
        if (userIndex > -1) {
            users[userIndex] = user;
            response.status(200).send();
        }
        else {
            response.status(404).send();
        }
    });
}
