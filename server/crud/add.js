const { app, ExecuteQuery } = require("../config");

const { add: JobEntry } = require("../api/job_entry");

const { add: Auth } = require("../api/auth");

const ADD_DATA = [...JobEntry, ...Auth];

ADD_DATA.forEach(({ uri, query, body, msg }) => {
	app.post(uri, (req, res) => {
		console.log(uri, query, body, msg);
		let bodyArr = [];
		body?.forEach((val) => {
			bodyArr.push(req?.body[val]);
		});

		console.log(req?.body);

		ExecuteQuery(
			res,
			query,
			[...bodyArr],
			"add",
			`${req?.body[msg]} added successfully`
		);
	});
});
