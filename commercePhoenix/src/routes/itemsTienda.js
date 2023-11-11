const express = require('express');
const router = express.Router();
const renderItems = require('../controllers/itemsTienda');

router.get("/productos", renderItems);


module.exports = router;