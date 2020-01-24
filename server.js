const express = require('express');
const server = express();
const projectRouter = require('./data/projects/projects-router')
const recourceRouter = require('./data/recources/recources-router')
const taskRouter = require('./data/tasks/tasks-router')
server.use(express.json());
server.use('/api/projects', projectRouter)
server.use('/api/recources', recourceRouter)
server.use('/api/projects', taskRouter)

module.exports = server;