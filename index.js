const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./routes/');
const database = require('./config/database')
require("dotenv").config();


database.connectDatabase();

const app = express(); 

//muestra peticiones http en la consola
app.use(morgan('dev'));

//gestiono peticiones remotas
app.use(cors());

//permito que el servidor reciba peticiones JSON a traves de post
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configurando direccion de archivos estaticos publicos
app.use(express.static(path.join(__dirname, 'public')));

//rutas
app.use('/api', router);

//asigno puerto por defecto del sistema, o en su defecto el puerto 4000
app.set('port', process.env.PORT || process.env.PORT_DEF);

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});