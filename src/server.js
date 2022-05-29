require('dotenv').config();

const express = require("express");
const routes = require("./routes.js")
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");



const app = express();
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@ggvapi.xynk9gm.mongodb.net/ggvDB?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(express.static(path.resolve(__dirname, "../frontend/build")));

app.listen(process.env.PORT || 3333);


