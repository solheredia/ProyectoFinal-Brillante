const emplCtrl = {};

const employee = require('../models/employee');
const empleado = require('../models/employee');

emplCtrl.getEmpls = async (req, res) => {
    const empleados = await empleado.find();
    res.json(empleados);
}

emplCtrl.createEmpl = async (req, res) => {
    const { name, servicio, date, author } = req.body;
    const newEmpleado = new employee({
        name: name,
        servicio: servicio,
        date: date,
        author: author
    })
    await newEmpleado.save();
    res.json({ message: 'Empleados cargados' });

};

emplCtrl.getEmpl = async (req, res) => {

    const empleado = await employee.findById(req.params.id);
    res.json(empleado);
}
emplCtrl.updateEmpl = async(req, res) => {
    const {name, servicio, author, date}= req.body;
   await employee.findOneAndUpdate({_id: req.params.id}, {
        name,
        servicio,
        author
    })
    res.json({ message: 'Empleado actualizados' })
};

emplCtrl.deleteEmpl = async (req, res) => {
    const empleado = await employee.findByIdAndDelete(req.params.id)
    res.json({ message: 'Empleado eliminado' })
}

emplCtrl.patchEmpl = (req, res) => res.json({ message: 'dato modificado' });
module.exports = emplCtrl

