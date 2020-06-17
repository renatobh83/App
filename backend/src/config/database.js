module.exports = {
  database: "tcc",
  dialect: "sqlite",
  storage: `./tcc.sqlite`,
  params: {
    define: {
      timestamps: true,
      underscored: true,
      underscoredAll: true,
    },
  },
};
