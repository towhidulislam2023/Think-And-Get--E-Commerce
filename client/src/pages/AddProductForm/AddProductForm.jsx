import React from "react";

const AddProductForm = () => {
	const addProductScema = yup.object({
		id: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		name: yup.string().required("Name required"),
		price: yup
			.number("price must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("price required"),
		discount: yup
			.number("discount must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Discount ID required"),
		rating: yup
			.number("rating must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("rating ID required"),
		sale_count: yup
			.number("sale_count must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("sale_count ID required"),
		wishlist_count: yup
			.number("wishlist_count must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		rating_count: yup
			.number("rating_count must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		category: yup
			.number("category must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category  required"),
		// gallary_image: yup.string().required("gallary_image required"),
		short_description: yup.string().required("short_description required"),
		full_description: yup.string().required("full_description required"),
		shop_id: yup.string().required("shop_id required"),
		variation: yup.string().required("variation required"),
		image: yup
			.mixed()
			.required("Category Picture is required")
			.test("fileFormat", "Invalid file format", (value) => {
				if (value && value.length) {
					const file = value[0];
					return file && file.type.includes("image");
				}
				return false;
			}),
		gallary_image: yup
			.mixed()
			.required("Category Picture is required")
			.test("fileFormat", "Invalid file format", (value) => {
				if (value && value.length) {
					const file = value[0];
					return file && file.type.includes("image");
				}
				return false;
			}),
	});
	const form = useForm({
		defaultValues: {
			id: "",
			name: "",
			price: "",
			discount: "",
			rating: "",
			sale_count: "",
			wishlist_count: "",
			rating_count: "",
			category: "",
			variation:"",
			image: "",

			gallary_image: "",
			short_description: "",
			full_description: "",
			shop_id: "",
			category_id: "",
		},
		resolver: yupResolver(addProductScema),
	});

	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const onSubmit = (data) => {
		console.log("FormData", data);
		console.log(errors);
	};
	return (
		<div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120 mt-3">
			{/* auth page header */}
			<div className="auth-page-header space-mb--50">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<h3 className="auth-page-header__title">Welcome</h3>
							<p className="auth-page-header__text">
								Add Your Category
							</p>
						</div>
					</div>
				</div>
			</div>
			{/* auth page body */}
			<div className="auth-page-body">
				<div className="container">
					<div className="row">
						<div className="col-12">
							{/* Auth form */}
							<div className="auth-form">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="id">ID</label>
										<input
											{...register("id")}
											type="number"
											name="id"
											id="id"
											placeholder="Enter ID"
										/>
										<p className="text-danger">
											{errors.id?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="name">Name</label>
										<input
											{...register("name")}
											type="text"
											name="name"
											id="name"
											placeholder="Enter Name"
										/>
										<p className="text-danger">
											{errors.name?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="price">Price</label>
										<input
											{...register("price")}
											type="number"
											name="price"
											id="price"
											placeholder="Enter Price"
										/>
										<p className="text-danger">
											{errors.price?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="discount">
											Discount
										</label>
										<input
											{...register("discount")}
											type="number"
											name="discount"
											id="discount"
											placeholder="Enter Discount"
										/>
										<p className="text-danger">
											{errors.discount?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="rating">Rating</label>
										<input
											{...register("rating")}
											type="number"
											name="rating"
											id="rating"
											placeholder="Enter Rating"
										/>
										<p className="text-danger">
											{errors.rating?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="sale_count">
											Sale Count
										</label>
										<input
											{...register("sale_count")}
											type="number"
											name="sale_count"
											id="sale_count"
											placeholder="Enter Sale Count"
										/>
										<p className="text-danger">
											{errors.sale_count?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="wishlist_count">
											Wishlist Count
										</label>
										<input
											{...register("wishlist_count")}
											type="number"
											name="wishlist_count"
											id="wishlist_count"
											placeholder="Enter Wishlist Count"
										/>
										<p className="text-danger">
											{errors.wishlist_count?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="rating_count">
											Rating Count
										</label>
										<input
											{...register("rating_count")}
											type="number"
											name="rating_count"
											id="rating_count"
											placeholder="Enter Rating Count"
										/>
										<p className="text-danger">
											{errors.rating_count?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category">
											Category
										</label>
										<input
											{...register("category")}
											type="number"
											name="category"
											id="category"
											placeholder="Enter Category"
										/>
										<p className="text-danger">
											{errors.category?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="variation">
											Variation
										</label>
										<input
											{...register("variation")}
											type="text"
											name="variation"
											id="variation"
											placeholder="Enter Variation"
										/>
										<p className="text-danger">
											{errors.variation?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="image">Image</label>
										<input
											{...register("image")}
											type="file"
											name="image"
											id="image"
											accept="image/*"
										/>
										<p className="text-danger">
											{errors.image?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="gallery_image">
											Gallery Image
										</label>
										<input
											{...register("gallery_image")}
											type="file"
											name="gallery_image"
											id="gallery_image"
											accept="image/*"
										/>
										<p className="text-danger">
											{errors.gallery_image?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="short_description">
											Short Description
										</label>
										<input
											{...register("short_description")}
											type="text"
											name="short_description"
											id="short_description"
											placeholder="Enter Short Description"
										/>
										<p className="text-danger">
											{errors.short_description?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="full_description">
											Full Description
										</label>
										<input
											{...register("full_description")}
											type="text"
											name="full_description"
											id="full_description"
											placeholder="Enter Full Description"
										/>
										<p className="text-danger">
											{errors.full_description?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="shop_id">Shop ID</label>
										<input
											{...register("shop_id")}
											type="text"
											name="shop_id"
											id="shop_id"
											placeholder="Enter Shop ID"
										/>
										<p className="text-danger">
											{errors.shop_id?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category_id">
											Category ID
										</label>
										<input
											{...register("category_id")}
											type="text"
											name="category_id"
											id="category_id"
											placeholder="Enter Category ID"
										/>
										<p className="text-danger">
											{errors.category_id?.message}
										</p>
									</div>

									<button className="auth-form__button">
										Add Category
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* auth page footer */}
		</div>
	);
};
export default AddProductForm;
