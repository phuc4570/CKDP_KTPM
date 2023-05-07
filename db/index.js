const mysql = require("mysql2/promise");

const db = { connection: null };

(async () => {
  db.connection = await mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "netcafe",
  });
  console.log("Database connected!");
})();

module.exports = db;
