const express = require('express');
const path = require('path');
const dotenv = require('dotenv');

// Carga las variables de entorno desde el archivo .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para entender datos JSON (necesario para el formulario de contacto)
app.use(express.json());

// CONFIGURACIÓN CLAVE: Servir archivos estáticos
// __dirname es la carpeta donde está este server.js
// 'src/public' es donde tienes tu index.html, css y js
app.use(express.static(path.join(__dirname, 'src', 'public')));

// Ruta de prueba para saber si el servidor responde
app.get('/ping', (req, res) => {
    res.send('pong');
});

// Iniciamos el servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    console.log(`📂 Sirviendo archivos desde: ${path.join(__dirname, 'src', 'public')}`);
});
