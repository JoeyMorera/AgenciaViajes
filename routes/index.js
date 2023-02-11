import express from 'express';     
import {paginaInicio, paginaNosotros, paginaViajes,paginaDetalleViaje, paginaTestimoniales} from '../controllers/paginaController.js'
import { guardarTestimonial } from '../controllers/testimonialController.js';

const router =express.Router()   

router.get('/', paginaInicio);      //Ruta asociada, el controlador
router.get('/nosotros', paginaNosotros);
router.get('/viajes', paginaViajes);
router.get('/viajes/:slug', paginaDetalleViaje);  
router.get('/testimoniales', paginaTestimoniales);
router.post('/testimoniales', guardarTestimonial);

export default router;  