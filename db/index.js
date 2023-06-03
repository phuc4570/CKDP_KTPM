const mysql = require("mysql2/promise");
const util = require("util");

const db = { connection: null };

(async () => {
  db.connection = await mysql.createConnection({
    host: "mysql-129861-0.cloudclusters.net",
    port: 19989,
    user: "admin",
    password: "pMLuw8fi",
    database: "netcafe",
  });
  console.log("Database connected!");
})();

module.exports = db;
