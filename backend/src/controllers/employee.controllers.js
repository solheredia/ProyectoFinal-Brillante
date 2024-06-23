const emplCtrl = {};

const employee = require('../models/employee');
const empleado = require('../models/employee');

emplCtrl.getEmpls = async (req, res) => {
    const empleados = await empleado.find();
    res.json(empleados);
}

emplCtrl.createEmpl = async (req, res) => {
    const { name, servicio, date } = req.body;
    const newEmpleado = new employee({
        name: name,
        servicio: servicio,
        date: date,
        
    })
    await newEmpleado.save();
    res.json({ message: 'Empleados cargados' });

};

emplCtrl.getEmpl = async (req, res) => {

    const empleado = await employee.findById(req.params.id);
    res.json(empleado);
}
emplCtrl.updateEmpl = async(req, res) => {
    const {name, servicio, date}= req.body;
   await employee.findOneAndUpdate({_id: req.params.id}, {
        name,
        servicio,
        date
    })
    res.json({ message: 'Empleado actualizados' })
};

emplCtrl.deleteEmpl = async (req, res) => {
     await employee.findByIdAndDelete(req.params.id)
    res.json({ message: 'Empleado eliminado' })
}


module.exports = emplCtrl


