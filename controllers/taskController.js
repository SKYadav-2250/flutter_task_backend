const Task = require('../models/Task');

const createTask = async (req, res) => {
  try {
    const { title, description , dueDate } = req.body;
    
    const task = await Task.create({ title, description,dueDate, user: req.user.id });
    console.log(`eror uaha ahjksj  , ${task}  `)
    return res.status(201).json(task);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id }).sort('-createdAt');
    return res.json(tasks);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    const updates = ['title', 'description', 'completed' , 'dueDate'];
    updates.forEach((key) => {
      if (req.body[key] !== undefined) task[key] = req.body[key];
    });

    await task.save();
    return res.json(task);
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) return res.status(404).json({ message: 'Task not found' });
    if (task.user.toString() !== req.user.id) return res.status(403).json({ message: 'Not authorized' });

    await task.remove();
    return res.json({ message: 'Task deleted' });
  } catch (err) {
    return res.status(500).json({ message: 'Server error', error: err.message });
  }
};

module.exports = { createTask, getTasks, updateTask, deleteTask };
