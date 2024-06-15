const {Schema, model } = require('mongoose');

const hoursSchema = new Schema ({
    Empleado: Number,
    Hora: {
        type: Number,
        required:true
        
    },
    author: String,
}, {
    timestamps:true
});

//coleccion horas
module.exports = model ('Hours', hoursSchema);