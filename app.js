 const PORT = process.env.PORT || 3000;

const express = require('express');
// const { stat } = require('fs/promises');
const mime = require('mime');
const path = require('path');

const app = express();

const setHeadersOnStatic = (res, path, stat) => {
   const type = mime.getType(path);
   res.set('content-type', type);
}

const staticOptions = {
   setHeaders: setHeadersOnStatic
}

 app.listen(PORT, () => { 
   console.log ("Servidor corriendo en puerto "+PORT);
});

app.use(express.static(path.join(__dirname, '/public'), staticOptions ));

/*app.listen(3000, ()=>{
   console.log('App listening .');
});*/

app.get('/', (req,res) =>{   
    //res.send("Hola Mundo");  // Permite enviar texto o codigo HTML
   res.sendFile(path.resolve(__dirname, './views/index.html'));   // Permite enviar un archivo HTML

});

app.get('/ofertas', (req,res) =>{      
  res.sendFile(path.resolve(__dirname, './views/ofertas.html')); 

});








