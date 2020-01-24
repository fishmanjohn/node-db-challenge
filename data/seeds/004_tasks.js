
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').del()
    .then(function () {
      // Inserts seed entries
      return knex('tasks').insert([
        {task_desc:'measure twice', notes:'make sure to measure the boards that need to be replaced',task_completed: false, project_id: 1},
        {task_desc:'cut once', notes:'cut the boards to size',task_completed: true, project_id: 1},
        {task_desc:'apply suncure', notes:'squeze suncure into crack put in sun ',task_completed: false, project_id: 2}
      ]);
    });
};
