const express = require("express");
const app = express()
const dotenv = require("dotenv")
dotenv.config()
const mongoose = require("mongoose")
const router = require("./routes/user.routes")

const cors = require("cors")

PORT = process.env.PORT
URI = process.env.URI

app.use(express.urlencoded({extended: true}));
app.use(express.json())
app.use(cors())
app.use("/", router)


app.listen(PORT, ()=>{
        mongoose.connect(URI).then(() => {
        console.log("port is running on 4000 and Database is connected");
    }).catch((err) => {
        console.log("Database is not connected");
    })
})