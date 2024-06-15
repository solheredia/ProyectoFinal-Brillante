const hoursCtrl = {};

const hour = require('../models/hours');

hoursCtrl.getHours = async (req, res) => {
    const hours = await hour.find();
    res.json(hours)
};

hoursCtrl.createHours = async(req, res) => {
    const { hourEmpleado } = req.body;
    const newHour = new hour({ hourEmpleado });
    await newHour.save();
    res.json('hora cargada');
}


hoursCtrl.getHour = (req, res) => res.json({ title: 'nnc' });
hoursCtrl.putHours = (req, res) => res.json({ message: 'Horas actualizadas' });
hoursCtrl.deleteHours = (req, res) => res.json({ message: 'Hora eliminada' });
hoursCtrl.patchHours = (req, res) => res.json({ message: 'dato modificado' });



module.exports = hoursCtrl