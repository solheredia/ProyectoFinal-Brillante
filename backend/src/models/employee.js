const {Schema, model } = require('mongoose');

const employeeSchema = new Schema ({
    title: String,
    content: {
        type: String,
        required:true,
        trim:true,
        unique:true
    },
    author: String,
}, {
    timestamps:true
});

//coleccion empleado
module.export = model ('Empleado', employeeSchema);