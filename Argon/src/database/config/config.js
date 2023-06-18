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
    username: "argondb_admin",
    password: "Lvolta123,.-",
    database: "database_test",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
  },
  production: {
    username: "argondb_admin",
    password: "Lvolta123,.-",
    database: "database_production",
    host: "mysql-argondb.alwaysdata.net",
    dialect: "mysql",
  },
};
