const hoursCtrl = {};
hoursCtrl.getHours = (req, res) => res.json({ message: [] });
hoursCtrl.createHours = (req, res) => res.json({ message: 'Horas cargadas' });


hoursCtrl.getHour = (req, res) => res.json({ title: 'nnc' });
hoursCtrl.putHours = (req, res) => res.json({ message: 'Horas actualizadas' });
hoursCtrl.deleteHours = (req, res) => res.json({ message: 'Hora eliminada' });
hoursCtrl.patchHours = (req, res) => res.json({ message: 'dato modificado' });



module.exports = hoursCtrl