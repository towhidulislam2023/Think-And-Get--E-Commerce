const { app, ExecuteQuery } = require("../config");

const { read: JobEntryRead } = require("../api/job_entry");

const GET_DATA = [...JobEntryRead];

GET_DATA.forEach(({ uri, query, param }) => {
    app.get(uri, (req, res) => {
        if (param === undefined) {
            ExecuteQuery(res, query);
            return;
        }

        let parmArr = [];
        param?.forEach((val) => {
            parmArr.push(req?.params[val]);
        });

        ExecuteQuery(res, query, [...parmArr]);
    });
});
