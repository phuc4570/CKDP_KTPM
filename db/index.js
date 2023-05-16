const mysql = require("mysql2/promise");
const util = require("util");

const db = { connection: null };

(async () => {
  db.connection = await mysql.createConnection({
    host: "mysql-126617-0.cloudclusters.net",
    port: 17900,
    user: "admin",
    password: "cFlkja2h",
    database: "netcafe",
  });
  console.log("Database connected!");
})();

module.exports = db;
