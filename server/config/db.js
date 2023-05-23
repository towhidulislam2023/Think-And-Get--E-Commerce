const mysql = require("mysql");
const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = require("./secret");

const db = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
});

const Operation = (res, operation, results = [], msg = "") => {
    switch (operation) {
        case "add":
            res.status(201).json({
                message: msg,
            });
            break;
        case "update":
            res.status(200).json({
                message: msg,
            });
            break;
        case "delete":
            res.status(200).json({
                message: msg,
            });
            break;
        case "no-results":
            res.status(404).json({
                message: "No results found",
            });
            break;
        case "error-query":
            res.status(500).json({
                error: "Error executing the query",
            });
            break;
        case "error-connection":
            res.status(500).json({
                error: "Error connecting to the database",
            });
            break;
        default:
            res.send(results);
            break;
    }
};


// operation = "add" | "update" | "delete" | "no-results" | "error-query" | "error-connection"
const ExecuteQuery = async (res, query, val = [], operation = "", msg = "") => {
    await db.getConnection((err, connection) => {
        if (err) {
            Operation(res, "error-connection");
            return;
        }

        connection.query(query, [...val], (error, results) => {
            connection.release(); // Release the connection

            if (error) {
                Operation(res, "error-query");
                return;
            }

            if (results?.length === 0) {
                Operation(res, "no-results");
                return;
            }

            Operation(res, operation, results, msg);
        });
    });
};

module.exports = Object.freeze({
    db,
    ExecuteQuery,
});
