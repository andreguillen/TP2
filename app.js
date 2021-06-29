const express = require('express');
const path = require('path');

const app = express();

app.get('/mundo', (req,res) =>{
   res.sendFile(path.join(dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.join(dirname, './public')));
//app.use(express.static(path.join(dirname, './views'))); en algun momento voy a necesitar poner publica esta carpeta 

app.listen(3000, () => {
    console.log("Servidor corriendo");
});