module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'gympoint',
  define: {
    timesstamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
