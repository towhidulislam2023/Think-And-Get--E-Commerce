const add = [
	{
		uri: "/product/addproduct",
		query: `INSERT INTO product( name, image, short_description, full_description, category_id) VALUES (?, ?, ?, ?, ?)`,
		body: [
			"name",
			"image",
			"short_description",
			"full_description",
			"category_id",
		],
		msg: "name",
	},
];

// Export modules
module.exports = Object.freeze({
	add,
});
