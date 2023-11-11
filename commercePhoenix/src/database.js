const mysql = require('mysql2');
const { promisify } = require('util');
// con este modulo mysql tengo que utilizar callback ya que no soporta promesas async await
// modulo de callback que me permitira soportar promesas 'util' biblioteca de node /metodo promisify
const { database } = require('./keys');


const pool = mysql.createPool(database); // createConection o createPool (más cercano a un entorno de producción)
// pool: serie de hilos que se ejecutan y realizan tareas simultaneas en secuencia // En caso de fallos hay mejor consideración //metodo para obtener la conección

// Utilizo este método en esta sección para evitar estar llamandolo cada vez que realice una conexión
// De esta manera solo necesito llamar el modulo definido
pool.getConnection((err, connection) => {
    if(err){
        if (err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONECTION WAS CLOSED');
        }
        if (err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTIONS');
        }
        if (err.code === 'ECONREFUSED') {
            console.error('DATABASE CONECTION WAS REFUSED');
        }
    }

    if (connection) connection.release();
    console.log('DB is Connected');
    return;
});

// Promisify pool querys // cuando quiero realizar consultas en base de datos ahora podre usar promesas con lo que antes era callback
pool.query = promisify(pool.query)

module.exports = pool;