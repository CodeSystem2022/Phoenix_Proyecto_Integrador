const dotenv = require("dotenv");
dotenv.config();

module.exports = {

    database: {
        connectionLimit: 10,
        host:process.env.host || 'localhost',
        user:process.env.user || 'root',
        database:process.env.database || 'commerce2',
        password:process.env.password || 'admin'
        
    }
    
};
