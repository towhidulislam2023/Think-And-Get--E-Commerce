const add = [
	{
		uri: "/category/addcategory",
		query: `INSERT INTO category (name, image, url) VALUES (?, ?, ?)`,
		body: ["name", "image", "url"],
		msg: "name",
	},
];

const read = [
	{
		uri: "/category/getcategory",
		query: `SELECT id,name FROM category`,
	},
];

// Export modules
module.exports = Object.freeze({
	add,
	read,
});
