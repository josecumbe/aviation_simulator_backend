require('dotenv').config();

const express = require("express");
const routes = require("./routes.js")
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");



const app = express();
mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.listen(process.env.PORT || 3333);


