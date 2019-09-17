import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import mongoose from 'mongoose';

mongoose.Promise = global.Promise;
const dbUrl = 'mongodb+srv://root:xxx8090235pp@cluster0-kzisw.gcp.mongodb.net/test?retryWrites=true&w=majority'
mongoose.connect(dbUrl, {useCreateIndex:true, useNewUrlParser: true})
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

//asigno puerto por defecto del sistema, o en su defecto el puerto 3000
app.set('port', process.env.PORT || 3000);
app.get('/hola', function(req, res) {
    res.send('Hola Mundo');
});
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});