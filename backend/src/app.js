const express = require('express');
const cors = require('cors');
const app = express()

//SET
app.set('port', process.env.PORT || 4000);


//MIDDLEWARES: funciones q se ejecutan antes o dsp de q lleguen a las rutas
app.use(cors());
app.use(express.json());
//ROUTES
app.get('/api/users',(req, res) => res.send('Users Routes'));
app.get('/api/hours',(req, res) => res.send('Hours Routes'));





module.exports = app;
