const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { validateTask } = require('../middleware/validate');
const { createTask, getTasks, updateTask, deleteTask } = require('../controllers/taskController');

router.use(auth);

router.get('/', getTasks);
router.post('/', validateTask, createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);

module.exports = router;
