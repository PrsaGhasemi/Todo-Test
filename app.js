const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
dotenv.config({path: "./src/config/config.env"})
const { setStatics } = require("./src/utils/statics");
const adminRoutes = require("./src/routes/admin");
const indexRoutes = require("./src/routes/index");
const errorController = require("./src/controllers/error");

const app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
//End of middleware

//EJS
app.set("view engine", "ejs");
app.set("views" , "./src/views")
//End of EJS

//Statics
setStatics(app);

//Routes
app.use(indexRoutes);
app.use("/admin", adminRoutes);
//End of routes

//404
app.use(errorController.get404);
PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server is running on port ${PORT}.`));
