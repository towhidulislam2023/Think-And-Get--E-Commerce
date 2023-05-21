const { db, app } = require("../config");

app.get("/management/get-lv-name", (req, res) => {
    const sqlSelect = `
    select 
       DISTINCT LV_name as value
    from pre_defined_ship
    ORDER BY LV_name ASC
    `;
    db.query(sqlSelect, (err, result) => {
        res.send(result);
    });
});

