const express = require('express');
const router = express.Router();
const { getAll, createTask, getTask, updateTask, deleteTask } = require('../controller/Tasks')

router.get('/', getAll)
router.get('/:id', getTask)
router.post('/', createTask)
router.put('/:id', updateTask);
router.delete('/:id', deleteTask)

module.exports = router