const knex = require('knex');
const knexConfig = require('../../knexfile');
const db = knex(knexConfig.development)


module.exports = {
    findTask,
    addTask
}
function findTask (projectId) {
    return db('tasks').orderBy('tasks.id')
        .join('projects', 'projects.id', 'project_id')
        .select('projects.name', 'tasks.id', 'task_desc' )
        .where('project_id', projectId)
}

function addTask(task){
    return db('tasks')
    .insert(task, 'id')
    .then(ids => ({ id: ids[0] }))
}
