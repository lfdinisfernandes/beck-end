const express = require('express');

const app = express();

app.get('/', async, (req, res) => {
    res.send('Hello World');
});

app.listen(8080, () =>{
    console.log("Servidor inicializado na porta 8080: http://localhost:8080");
});