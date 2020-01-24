
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recources').del()
    .then(function () {
      // Inserts seed entries
      return knex('recources').insert([
        {rescource_name: 'lumber', recource_desc: 'redwood 2X6'},
        {rescource_name: 'sun cure', recource_desc: 'uv cure epoxy'},
        {rescource_name: 'macBook pro', recource_desc: 'a powerful machine for processing information'}
      ]);
    });
};
