const { app, ExecuteQuery } = require("../config");

const { remove: JobEntryRemove } = require("../api/job_entry");

const REMOVE_DATA = [...JobEntryRemove];

REMOVE_DATA.forEach(({ uri, query, param, msg }) => {
    app.delete(uri, (req, res) => {
        let paramArr = [];
        param?.forEach((val) => {
            paramArr.push(req?.params[val]);
        });

        ExecuteQuery(
            res,
            query,
            [...paramArr],
            "delete",
            `${req?.params[msg]} deleted successfully`
        );
    });
});
