const { app, ExecuteQuery } = require("../config");

const { change: JobEntryChange } = require("../api/job_entry");

const CHANGE_DATA = [...JobEntryChange];

CHANGE_DATA.forEach(({ uri, query, body, parm, msg }) => {
    app.post(uri, (req, res) => {
        let parmArr = [];
        parm?.forEach((val) => {
            parmArr.push(req?.params[val]);
        });

        let bodyArr = [];
        body?.forEach((val) => {
            bodyArr.push(req?.body[val]);
        });

        console.log(bodyArr);

        ExecuteQuery(
            res,
            query,
            [...bodyArr, ...parmArr],
            "update",
            `${req?.params[msg]} updated successfully`
        );
    });
});
