const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const mongodbRoute = 'mongodb://itziar:ExCA2bBJLYv3RVIJ@ac-wvnmlbx-shard-00-01.cwdt8zu.mongodb.net:27017,ac-wvnmlbx-shard-00-00.cwdt8zu.mongodb.net:27017,ac-wvnmlbx-shard-00-02.cwdt8zu.mongodb.net:27017/admin?authMechanism=SCRAM-SHA-1&authSource=admin&tls=true';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

async function start() {
    try {
        await mongoose.connect(mongodbRoute);
        app.listen(PORT, () => {
            console.log(`API is listening on port ${PORT}`);
        });
        console.log('Conexion con mongo correcta.')
    } catch (error) {
        console.log(`Error al conectar a la base de datos: ${error.message}`);
    }
}

start();