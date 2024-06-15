const emplCtrl = {};

const empleado = require('../models/employee');

emplCtrl.getEmpls = async (req, res) => {
    const empleados = await empleado.find();
    res.json(empleados);
}

emplCtrl.createEmpl = (req, res) => {

    res.json({ message: 'Empleados cargados' });

};

emplCtrl.getEmpl = (req, res) => res.json({ nombre: 'nnc' });

emplCtrl.updateEmpl = (req, res) => res.json({ message: 'Empleado actualizados' });

emplCtrl.deleteEmpl = (req, res) => res.json({ message: 'Empleado eliminado' });
emplCtrl.patchEmpl = (req, res) => res.json({ message: 'dato modificado' });
module.exports = emplCtrl

