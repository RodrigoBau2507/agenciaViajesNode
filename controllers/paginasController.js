import {Viaje } from '../models/Viaje.js'
import { Testimonial } from '../models/Testimoniales.js';

const paginaInicio = async (req, res) => {//req- lo que enviamos y res lo que express nos responde

    const promiseD = [];

    promiseD.push( Viaje.findAll({limit: 3}));
    promiseD.push( Testimonial.findAll({limit: 3}))
    //cosultar  3 viajes del modelo viaje
    try {
        //Esto esta mal y para solucionarlo se necesita de un promise
        // const viajes = await Viaje.findAll({limit: 3});
        // const testimoniales = await Testimonial.findAll({limit: 3});

        const resultado = await Promise.all(promiseD);
        res.render('inicio', {
            pagina: 'Inicio',
            clase: 'home',
            viajes: resultado[0], 
            testimoniales: resultado[1]
        });
    } catch (error) {
        console.log(error);
    }

  
}

const paginaNosotros = (req, res) => {//req- lo que enviamos y res lo que express nos responde
    res.render('nosotros', {
        pagina: 'Nosotros'
    });
}

const paginaViajes = async (req, res) => {//req- lo que enviamos y res lo que express nos responde
    //Consultar la base de Datos 

    const viajes = await Viaje.findAll();

    console.log(viajes);
    
    
    res.render('viajes', {
        pagina: 'Próximos Viajes',
        viajes
       
    })
}

const paginaTestimoniales = async (req, res) => {//req- lo que enviamos y res lo que express nos responde
    
    try {
        const testimoniales = await Testimonial.findAll();
        res.render('testimoniales', {
            pagina: 'Testimoniales', 
            testimoniales
        });
    } catch (error) {
        console.log(error);
    }
    
    
}


//Muestra un viaje por su slug 
const paginaDetalleViaje = async (req, res) => {
    const { slug } = req.params;
    try {
        const viaje = await Viaje.findOne({where : {slug }});

        res.render('viaje', {
            pagina: 'Información Viaje',
            viaje
        })
    } catch (error) {
        console.log(error);
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaViajes, 
    paginaTestimoniales, 
    paginaDetalleViaje
}