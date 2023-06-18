const read = [
	{
		uri: "/auth/verify_login/:email/:password",
		query: `SELECT * from customer_profile where email = ? and password = ?`,
		param: ["email", "password"],
		msg: "email or password is incorrect",
	},
];

const add = [
	{
		uri: "/auth/register",
		query: `INSERT INTO customer_profile (name, email, password) VALUES (?, ?, ?)`,
		body: ["name", "email", "password"],
		msg: "name",
	},
];

// Export modules
module.exports = Object.freeze({
	read,
	add,
});
