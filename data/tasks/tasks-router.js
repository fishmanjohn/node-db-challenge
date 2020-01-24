const express = require('express');

const tasks = require('./tasks-model');

const router = express.Router();


router.get('/:id/tasks', (req, res) => {
    const { id } = req.params;
  
    tasks.findTask(id)
    .then(steps => {
        res.json(steps);})
    .catch(err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to get tasks' });
    });
  });

  router.post('/:id/tasks', (req, res) => {
    const taskData = req.body;
    const project_Id = req.params.id; 


    tasks.addTask({...taskData, project_Id})
    .then(task=> {
     es.status(201).json(task);
        })
    .catch (err => {
        console.log(err)
      res.status(500).json({ message: 'Failed to create new task' });
    });
  });

  module.exports = router;