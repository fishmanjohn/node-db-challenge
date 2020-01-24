
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {name:'Repair deck', description: 'fix the holes in the deck', completed: false},
        {name:'fix snowboard nose', description: 'repair delam on nose of board before going riding.', completed: false},
        {name:'do sprint', description: 'Type code and hope it works', completed: false}
      ]);
    });
};
