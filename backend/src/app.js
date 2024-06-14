const express = require('express');
const cors = require('cors');
const app = express()

//SET
app.set('port', process.env.PORT || 4000);


//MIDDLEWARES: funciones q se ejecutan antes o dsp de q lleguen a las rutas
app.use(cors());
app.use(express.json());
//ROUTES
app.use('/api/employee',require('./routes/employee'))
app.use('/api/hours',require('./routes/hours'));





module.exports = app;
