import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';
import router from './routes/';
import {} from 'dotenv/config';

mongoose.Promise = global.Promise;
const dbUrl = `mongodb+srv://${process.env.USR_DB}:${process.env.PSW_DB}@cluster0-kzisw.gcp.mongodb.net/test?retryWrites=true&w=majority`
mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true, useUnifiedTopology: true})
.then(mongoose => console.log('Conectado a la base de datos'))
.catch(err => console.log(err));

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

//asigno puerto por defecto del sistema, o en su defecto el puerto 3000
app.set('port', process.env.PORT || process.env.PORT_DEF);

app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});