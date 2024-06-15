const {Schema, model } = require('mongoose');

const hoursSchema = new Schema ({
    empleado: int,
    content: {
        type: int,
        required:true
        
    },
    author: String,
}, {
    timestamps:true
});

//coleccion horas
module.export = model ('Hours', hoursSchema);