const hoursCtrl = {};

const hours = require('../models/hours');

hoursCtrl.getHours = async (req, res) => {
    const hour = await hours.find();
    res.json(hour)
};

hoursCtrl.createHours = async (req, res) => {
    const { Name, Hora, author, date } = req.body;
    const newHour = new hours({
        Name,
        Hora,
        author,
        date,
    });
    await newHour.save();
    res.json({ message: 'hora cargada' });
}


hoursCtrl.getHour = async (req, res) => {
    const hour = await hours.findById(req.params.id);
    res.json(hour);
}



hoursCtrl.putHours = async (req, res) =>
    {
        const{Name, Hora, author,date} =req.body;
        await hours.findByIdAndUpdate(req.params.id, {
            Name,
            Hora,
            author,
            date

        })
        res.json({ message: 'Horas actualizadas' });
    } 

        
        
hoursCtrl.deleteHours = async (req, res) => {
    await hours.findByIdAndDelete(req.params.id)
    res.json({ message: 'Hora eliminada' })
};




module.exports = hoursCtrl