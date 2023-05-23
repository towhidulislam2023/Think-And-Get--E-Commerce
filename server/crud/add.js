const { app, ExecuteQuery } = require("../config");

const { add: JobEntryAdd } = require("../api/job_entry");

const ADD_DATA = [...JobEntryAdd];

ADD_DATA.forEach(({ uri, query, body, msg }) => {
    app.post(uri, (req, res) => {
        let bodyArr = [];
        body?.forEach((val) => {
            bodyArr.push(req?.body[val]);
        });

        ExecuteQuery(
            res,
            query,
            [...bodyArr],
            "add",
            `${req?.body[msg]} added successfully`
        );
    });
});
