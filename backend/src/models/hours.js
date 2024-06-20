const {Schema, model } = require('mongoose');

const hoursSchema = new Schema ({
    IdEmpleado: Number,
    Hora: Number,
    author: String,
    date:{
        type: Date,
        default: Date.now
    },
}, {
    timestamps:true
});

//coleccion horas
module.exports = model ('Hours', hoursSchema);