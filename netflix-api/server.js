require('dotenv').config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const userRoutes = require("./routes/UserRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DB_LINK, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    app.use("/api/user", userRoutes);
    app.listen(5000, console.log('server started'));
    console.log("DB Connected");
})
.catch((error) => {
    console.log(error);
});
