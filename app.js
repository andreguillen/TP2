const express = require('express');
const path = require('path');

const app = express();

app.get('/mundo', (req,res) =>{
   res.sendFile(path.join(dirname, './views/index.html'));  // Permite enviar un archivo HTML
});

app.use(express.static(path.join(dirname, './public')));

app.listen(3000, () => {
    console.log("Servidor corriendo");
});