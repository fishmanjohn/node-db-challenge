
exports.up = function(knex) {
    return knex.schema
    .createTable('projects', tbl =>{
        tbl.increments()
        tbl.string('name')
          .notNullable()
          .unique()
        tbl.text('description')
          .notNullable()
        tbl.boolean('completed')
          .default(false)
      })
    .createTable('recources', tbl =>{
        tbl.increments()
        tbl.string('rescource_name')
          .notNullable()
          .unique()
        tbl.text('recource_desc')
          .notNullable()
      })
      .createTable('tasks', tbl => {
          tbl.increments()
          tbl.text('task_desc')
              .notNullable()
          tbl.text('notes')
          tbl.boolean('task_completed')
              .default(false)
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
      })
      .createTable('projects_recources', tbl =>{
          tbl.increments()
          tbl.integer('project_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
          tbl.integer('recource_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('recources')
      })
  
      
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExsists('projects_recources')
      .dropTableIfExsists('tasks')
      .dropTableIfExsists('recources')
      .dropTableIfExsists('projects')
  };
  