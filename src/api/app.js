const express = require('express');
const cors = require('cors');

const rescue = require('express-rescue');
const UserController = require('../controllers/user');
const errorMiddleware = require('../middlewares/error');

const app = express();
app.use(cors());

app.get('/', rescue(async (req, res) => res.status(200).json({ message: 'TA FUNCIONANDO!!' })));

app.get('/users', rescue(UserController));

app.use(errorMiddleware);

module.exports = app;
