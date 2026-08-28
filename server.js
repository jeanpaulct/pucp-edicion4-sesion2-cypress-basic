const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Sirve los archivos estáticos desde el directorio "public"
 * Cypress funciona mejor interactuando con un servidor HTTP en lugar de archivos locales (file://)
 */
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT, () => {
  console.log(`Servidor de desarrollo ejecutándose en http://localhost:${PORT}`);
});