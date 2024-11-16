const express = require('express');
const Todo = require('../models/Todo');

const router = express.Router();

// Middleware to check authentication
function isAuthenticated(req, res, next) {
  if (req.session.userId) {
    return next();
  }
  res.redirect('/login');
}

// Get Todos
router.get('/todos', isAuthenticated, async (req, res) => {
  const todos = await Todo.find({ userId: req.session.userId });
  res.render('todos', { title: 'Your Todos', todos });
});

// Add Todo
router.post('/todos', isAuthenticated, async (req, res) => {
  const { title } = req.body;
  await Todo.create({ title, userId: req.session.userId });
  res.redirect('/todos');
});

// Toggle Completion
router.post('/todos/:id/toggle', isAuthenticated, async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  todo.completed = !todo.completed;
  await todo.save();
  res.redirect('/todos');
});

// Delete Todo
router.post('/todos/:id/delete', isAuthenticated, async (req, res) => {
  await Todo.findByIdAndDelete(req.params.id);
  res.redirect('/todos');
});

module.exports = router;
