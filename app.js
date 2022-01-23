//require('./db/connect') 
const express = require('express')
const app = express()

const router = require('./routes/Task')
const connectDB = require('./db/connect')
require('dotenv').config() // to import dotenv package in project, don't need to assign it to any variable

//middleware 
app.use(express.json())

//routes
app.use(express.static('./public'))
app.use("/api/v1/tasks", router)
const PORT = 8000;
const start = async () => {
    try {
        //invoking server after db is connected
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, console.log('Running in 8000'))
    } catch (err) {
        console.error();
    }
}
start() // calling the function which starts the db and server here.

