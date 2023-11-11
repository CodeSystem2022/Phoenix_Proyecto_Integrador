// Almacenar las rutas principales de la aplicación /bienvenida usuario /mostrar acerca de 

const express = require('express'); // Requerimos Express para crear rutas
const router = express.Router(); // Metodo para devolver un objeto
const { isLoggedIn } = require('../lib/auth');

router.get('/', async (req, res) => {
    res.render('index');
});

router.get('/carrito', isLoggedIn, async (req, res) => {
    res.render('carrito.hbs');
});

router.get('/quieneSomos', isLoggedIn, async (req, res) => {
    res.render('quieneSomos.hbs');
});

module.exports = router;