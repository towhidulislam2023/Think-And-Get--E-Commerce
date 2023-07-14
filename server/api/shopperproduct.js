const add = [
	{
		uri: "/shopperproduct/addshopperproduct",
		query: `INSERT INTO shopper_product( name, price, discount, product_count, product_id) VALUES (?, ?, ?, ?, ?)`,
		body: ["name", "price", "discount", "product_count", "product_id"],
		msg: "name",
	},
];

// Export modules
module.exports = Object.freeze({
	add,
});
