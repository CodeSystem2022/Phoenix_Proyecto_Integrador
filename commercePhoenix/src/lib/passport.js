// METODOS PARA LA AUTENTIFICACIÓN DE USUARIO

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// gestion de conexión
const pool = require('../database');
// metodo para el cifrado de datos importantes como contraseña
const helpers = require('../lib/helpers');

// metodo para signin
passport.use('local.signin', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',
    passReqToCallback: true
}, async (req, username, password, done) => {
    console.log(req.body);
    pool.query('SELECT * FROM usuarios WHERE username = ?', [username], async (error, rows) => {
        if (error) {
            return done(error);
        }
        if (rows.length > 0) {
            const user = rows[0];
            const validPassword = await helpers.matchPassword(password, user.password);
            if (validPassword) {
                done(null, user, req.flash('success', 'Welcome ' + user.username));
            } else {
                done(null, false, req.flash('message', 'Incorrect Password'));
            }
        } else {
            return done(null, false, req.flash('message', 'The Username does not exists.'));
        }
    });
}));

// metodo para signup
passport.use('local.signup', new LocalStrategy({
    usernameField: 'username',
    passwordField: 'password',  // En lugar de 'passportField', debe ser 'passwordField'
    passReqToCallback: true      // En lugar de 'passReqCallback', debe ser 'passReqToCallback'
}, async (req, username, password, done) => {
    console.log(req.body);
    const { fullname, email } = req.body;
    let usuario = {
        fullname,
        username,
        email,
        password
    };
    usuario.password = await helpers.encryptPassword(password); //usamos nuestro metodo en helpers para cifrar una de las variables
    const result = await pool.query('INSERT INTO usuarios SET ?', [usuario]) //conexion/usuario 

    //aqui asignaremos un Id a mi usuario creado /vemos en propiedades de usuario y vemos este insertId
    usuario.id = result.insertId;
    return done(null, usuario);
}));

//usando passport (middleware)
// serializar usuario 

passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Deserializar usuario /consultar para saber si mi user id existe
passport.deserializeUser(async (id, done) => {
    const rows = await pool.query('SELECT * FROM usuarios WHERE id = ?', [id]);
    done(null, rows[0]);
});
