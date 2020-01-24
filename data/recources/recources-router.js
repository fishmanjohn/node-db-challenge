const express = require('express');

const recources = require('./recources-model');

const router = express.Router();

router.get('/', (req, res) => {
    recources.find()
    .then(list => {
      res.json(list);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recources' });
    });
  });


  router.post('/', (req, res) => {
    const recourseData = req.body;
  
    recources.add(recourseData)
    .then(reco => {
      res.status(201).json(reco);
    })
    .catch (err => {
      res.status(500).json({ message: 'Failed to create new recource' });
    });
  });

  module.exports = router;