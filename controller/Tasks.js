const Task = require('../models/Task')

const getAll = async (req, res) => {
    try {
        const task = await Task.find({}) //to get data from database
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}
const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body) // tp add data to database
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}
const getTask = async (req, res) => {
    try {
        const { id: taskID } = req.params
        const task = await Task.findOne({ _id: taskID })

        if (!task) {
            return res.status(404).json({ msg: `No task for id ${taskID}` })
        }
        return res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({ msg: error })
    }

}

const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidator: true
        })
        if (!task) {
            return res.status(404).json({ msg: `No task for id ${taskID}` })
        }
        return res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndDelete({ _id: taskID })
        if (!task) {
            return res.status(404).json({ msg: `No task for id ${taskID}` })
        }
        return res.status(200).json({ task })
    } catch (error) {
        return res.status(500).json({ msg: error })

    }
}

module.exports = { getAll, createTask, getTask, updateTask, deleteTask }