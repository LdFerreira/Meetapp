module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'MeetApp',
  define: {
    timesstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
