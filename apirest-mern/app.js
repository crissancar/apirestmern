//requires
const express = require('express');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//conectar mongodb
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/apirestmern',{
 
  useNewUrlParser: true,
  useUnifiedTopology: true
 
})
.then(()=> console.log('Base de datos ONLINE'))
.catch(err => console.log('No se pudo conectar',err));

//crear servidor
const app = express();

//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//rutas
app.use('/', routes());

//puerto
app.listen(5000, () => {
    console.log('Escuchando el puerto ', 5000);
});