const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const router = require('./src/routes/');
require("dotenv").config();

const app = express();

app.use(cors());

//muestra peticiones http en la consola
app.use(morgan('dev'));
//permito que el servidor reciba peticiones JSON
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//configurando direccion de archivos estaticos publicos
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static('upload/images'));

//rutas
app.use('/api', router);

//asigno puerto por defecto del sistema, o en su defecto el puerto
app.set('port', process.env.PORT || process.env.PORT_NODE);

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});

//gestiono peticiones remotas
// var whitelist = [
//     'https://dev.tedesco.es',
//     'http://192.168.1.4',
//     'http://localhost:8080',
//     'http://localhost:8081'
// ]
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true)
//     } else {
//       callback(new Error('Not allowed by CORS'))
//     }
//   }
// }
// app.use(cors(corsOptions));

