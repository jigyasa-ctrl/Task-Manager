const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    // name: String,
    //completed: Boolean
    // adding more validations so that falsy values don't get passed to database
    name: {
        type: String,
        required: [true, 'must provide name'],
        trim: true, // this is to trim incase value contains extra spaces
        maxlength: [20, 'name cant be more than 20'] // to set string max length
    },
    completed: {
        type: Boolean,
        default: false // default value - set it to false because we don't want task to be shown as completed by default
    }

})

module.exports = mongoose.model('Task', TaskSchema)