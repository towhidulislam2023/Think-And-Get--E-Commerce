const add = [
	{
		uri: "/product/addproduct",
		query: `INSERT INTO product( name, price, discount, rating, sale_count, wishlist_count, rating_count, variation, image, gallary_image, short_description, full_description, shop_id, category_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)`,
		body: [
			"name",
			"price",
			"discount",
			"rating",
			"sale_count",
			"wishlist_count",
			"rating_count",
			"variation",
			"image",
			"gallery_image",
			"short_description",
			"full_description",
			"shop_id",
			"category_id",
		],
		msg: "name",
	},
];

// Export modules
module.exports = Object.freeze({
	add,
});
