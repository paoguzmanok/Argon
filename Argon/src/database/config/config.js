module.exports = {
  development: {
    username: "argondb_admin",
    password: "Lvolta123,.-",
    database: "argondb_dh",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
    dialectOptions: { connectTimeout: 100000 },
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
  },
};
