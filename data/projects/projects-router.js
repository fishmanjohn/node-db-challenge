const express = require('express');

const projects = require('./projects-model');

const router = express.Router();

router.get('/', (req, res) => {
    projects.find()
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get projects' });
    });
  });


  router.post('/', (req, res) => {
    const projectData = req.body;
  
    projects.add(projectData)
    .then(proj => {
      res.status(201).json(proj);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new project' });
    });
  });

  module.exports = router;