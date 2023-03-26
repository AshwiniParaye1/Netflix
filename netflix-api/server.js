// import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config()
require('dotenv').config()


const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
console.log("==============================",process.env)

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_LINK, 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }
)
.then( () => {
    console.log("DB Connected")
} )

app.listen(5000, console.log('server started'));