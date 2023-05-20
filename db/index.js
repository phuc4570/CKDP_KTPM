const mysql = require("mysql2/promise");
const util = require("util");

const db = { connection: null };

(async () => {
  db.connection = await mysql.createConnection({
    host: "mysql-127431-0.cloudclusters.net",
    port: 19064,
    user: "admin",
    password: "lLdajpkS",
    database: "netcafe",
  });
  console.log("Database connected!");
})();

module.exports = db;
