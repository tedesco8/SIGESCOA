import express from 'express';
// const express = require('express');
import morgan from 'morgan';
// const morgan = require('morgan');
import cors from 'cors';
// const cors = require('cors');
const app = express();

//muestra peticiones http en la consola
app.use(morgan('dev'));

//gestiono peticiones remotas
app.use(cors());

//permito que el servidor reciba peticiones JSON a traves de post
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//asigno puerto por defecto del sistema, o en su defecto el puerto 3000
app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), () => {
    console.log('server on port ' + app.get('port'));
});