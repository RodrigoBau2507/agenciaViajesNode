//const express = require('express');
import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';
// import dotenv from 'dotenv'

// dotenv.config()

const app = express();


//Conectar a la base de datos

db.authenticate()
    .then(() => console.log('Base de datos conectada'))
    .catch(error => console.log(error));
//Definir el puerto <!-se puede hacer con p= o #{varible}->
const port = process.env.PORT || 4000;
//Abilitar pug
app.set('view engine', 'pug');

//Obtener el año actual 
app.use((req, res, next) => {
    const year = new Date();

    res.locals.actualYear = year.getFullYear();
    res.locals.nombreSitio = "Agencia de Viajes";
    return next()
})

//Agreagr body parser para leer los datos del formulari
app.use(express.urlencoded({extended: true}));


//Definir la carpeta publica
app.use(express.static('public'));
//Agregar router
app.use('/', router);


app.listen(port, () => {
    console.log(`El servidor esta funcionando en el puerto ${port}`);
})