import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
const Sequelize = require('sequelize');

//conexion a la bd
const db = new Sequelize('dbsigesco', 'root', 'Xxx8090235pp*', {
    host: 'localhost',
    dialect: 'mysql',
    port: '3306',
    operatorAliases: false,
    define: {
        timestamps: false
    },
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  });

  db.authenticate()
  .then(() => {
    console.log('Conectado')
  })
  .catch(err => {
    console.log('No se conecto')
  })

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

//asigno puerto por defecto del sistema, o en su defecto el puerto 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});