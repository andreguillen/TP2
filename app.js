const express = require('express');
const path = require('path');

const app = express();

app.listen(3000, () => { 
   console.log ("Servidor corriendo en puerto 3000");
});

app.use(express.static(path.join(__dirname, '/public')));

app.get('/', (req,res) =>{   
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
   res.sendFile(path.resolve(__dirname, './views/index.html'));   // Permite enviar un archivo HTML

});






//app.use(express.static(path.join(dirname, './views'))); en algun momento voy a necesitar poner publica esta carpeta 







