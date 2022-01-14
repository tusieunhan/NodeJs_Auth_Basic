const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth")
const userRoute = require("./routes/user")

const app = express();

dotenv.config();
mongoose.connect(process.env.MONGODB,()=>{
    console.log("Connected to database.");
})

app.use(cors());
app.use(cookieParser());
app.use(express.json());

//Router
app.use('/v1/auth', authRoute);
app.use('/v1/user', userRoute);

app.listen(8000,()=> console.log("Server is running..."));