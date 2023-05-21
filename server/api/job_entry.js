const { db, app } = require("../config");

//Get Job Entry
app.get("/management/get-job-entry", (req, res) => {
    const sqlSelect = "SELECT * from job_entry";
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});
