const bcrypt = require('bcryptjs');

//creamos constante helpers con su objeto
const helpers = {};

//definir método para cifrar contraseña a cual nombramos como encr...
helpers.encryptPassword = async (password) => {     //recibe contraseña en texto plano
    // aqui necesitamos y hacemos uso de nuestro modulo de cifrado (bcryptjs)
    const salt = await bcrypt.genSalt(10);          // generamos un patron, cuanto mayor numero de veces se ejecute más seguridad, requiere tiempo
                                                    //genera un hash y requiere una función asyncrona
    const hash = await bcrypt.hash(password, salt); //aqui generamos la encriptación basada en pass.. y salt
    return hash;
};
//metodo de cifrado para loggeo
helpers.matchPassword = async(password, savePassword) => {
    try {
        return await bcrypt.compare(password, savePassword); //retorna el resultado de la consulta
    } catch (e) {
        console.log(e);
    }
}
module.exports = helpers;