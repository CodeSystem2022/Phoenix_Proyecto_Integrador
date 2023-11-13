// Ruta para signin signup signout // lo que sera la autentificación del usuario

const express = require('express');
const router = express.Router();

const passport = require('passport');
const { isLoggedIn, isNotLoggedIn } = require('../lib/auth');

const { body, validationResult } = require('express-validator');


// SIGNUP routes
router.get('/signup', (req, res) => {
  res.render('auth/signup');
});

// SIGNUP
router.post('/signup', passport.authenticate('local.signup', {
  successRedirect: '/carrito',
  failureRedirect: '/signup',
  failureFlash: true
}));

// SINGIN
router.get('/signin', (req, res) => {
  res.render('auth/signin');
});

// SIGNIN
router.post('/signin', [
  body('username').notEmpty().withMessage('Username is Required'),
  body('password').notEmpty().withMessage('Password is Required')
], (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorMessages = errors.array().map(error => error.msg);
    req.flash('message', errorMessages[0]);
    return res.redirect('/signin');
  }
  passport.authenticate('local.signin', {
    successRedirect: '/carrito',
    failureRedirect: '/signin',
    failureFlash: true //FAILURE FLASH MENSAJES A LA VISTA
  })(req, res, next);
});

// LOGOUT

router.get('/closeSession', isNotLoggedIn, (req, res) => {
  res.render('auth/closeSession');
});

router.get('/logout', isLoggedIn, logout = (req, res, next) => {
  req.logout(function (err) { //metodo de passport nos permite limpiar la session
    if (err) return next(err);
    res.redirect("/");
  });
});

module.exports = router;