
const mongoose = require('mongoose');

// URL de conexión a la base de datos MongoDB
const uri = 'mongodb://localhost/Brillante';

// Conexión a la base de datos
mongoose.connect(uri);

// Obtención del objeto de conexión
const db = mongoose.connection;

// Manejo de eventos de conexión
db.on('error', console.error.bind(console, 'Error de conexión a MongoDB:'));
db.once('open', () => {
    console.log('Conexión exitosa a la base de datos MongoDB.');
});

// Definición de los modelos y demás lógica de la aplicación