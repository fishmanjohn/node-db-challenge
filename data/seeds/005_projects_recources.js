
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects_recources').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects_recources').insert([
        {project_id:1 ,recource_id:1},
        {project_id:2 ,recource_id:2},
        {project_id:3 ,recource_id:3}
      ]);
    });
};
