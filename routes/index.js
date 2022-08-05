import  express  from "express";
import { paginaInicio, paginaNosotros, paginaViajes, paginaTestimoniales, paginaDetalleViaje } from "../controllers/paginasController.js";
import { guardarTestimonial } from "../controllers/testimonialController.js";

const router = express.Router();

router.get('/', paginaInicio);

router.get('/nosotros', paginaNosotros);

router.get('/viajes',paginaViajes );

router.get('/viajes/:slug',paginaDetalleViaje );

router.get('/testimoniales', paginaTestimoniales);

router.post('/testimoniales', guardarTestimonial);



// router.get('/contacto', (req, res) => {//req- lo que enviamos y res lo que express nos responde
//     res.send('Contacto');
// });


export default router;










 // const viajes = 'Viaje a Alemania';

    // //Para pasar las variable de JS a la vista se Hace como un objeto desde res.render({en este espacio van todos lo necesario})

    // res.render('nosotros', {
    //     viajes
    // });