const mongoose = require('mongoose')


const connection = ""
// creating the function to invoke db connection from appjs  
const connectDB = (url) => {
    mongoose.connect(url, { useNewUrlParser: true, useCreateIndex: true, useFindAndModify: false, useUnifiedTopology: true });
}
//to connect to db via mongoose- always returns a promise

module.exports = connectDB