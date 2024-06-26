const {Schema, model } = require('mongoose');

const employeeSchema = new Schema ({
    name: String,
    servicio: {
        type: String,
        required:true,
        trim:true,
    },
    date: {
        type:Date,
        default: Date.now
    }
}, {
    timestamps:true
});

//coleccion empleado
module.exports = model ('Empleado', employeeSchema);