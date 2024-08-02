require('dotenv').config();
const express = require("express");
const app = express();
const cors = require("cors");
const authRoute = require("./router/auth-router");
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-router")
const adminRoute = require("./router/admin-router")
const connectDb = require("./utils/db");
const errorMiddleware = require('./middlewares/error-middleware');

// tackling cors policy
let corsOptions ={
    origin :"http://localhost:5173",
    method :"GET,POST,PUT,DELETE,PATCH,HEAD",
    credentials : true,
}

app.use(cors(corsOptions));




app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);

//admin route
app.use("/api/admin", adminRoute);
app.use("/api/admin", contactRoute);

app.use(errorMiddleware);

const PORT = 5000;

connectDb().then(()=>{
    app.listen(PORT, ()=>{
        console.log(`server is runnning  at port : ${PORT}`);
        // console.log(process.env.MONGODB_URI);
    });
});