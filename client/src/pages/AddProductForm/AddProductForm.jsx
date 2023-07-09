import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddProductForm = () => {
	const [categoryNames, setCategoryNames] = useState([]);

	// file upload
	const [Image, setImage] = useState(null);
	const [ImageName, setImageName] = useState("");

	const [GallaryImage, setGallaryImage] = useState(null);
	const [GallaryImageName, setGallaryImageName] = useState("");

	const handleImage = (e) => {
		const file = e.target.files[0];
		if (file) {
			setImage(file);
			setImageName(file.name);
		}
	};

	const handleGalleryImage = (e) => {
		const file = e.target.files[0];
		if (file) {
			setGallaryImage(file);
			setGallaryImageName(file.name);
		}
	};

	useEffect(() => {
		Axios.get(`${process.env.REACT_APP_API_URL}/category/getcategory`).then(
			(response) => {
				setCategoryNames(response.data);
			}
		);
	}, []);

	const addProductScema = yup.object({
		name: yup.string().required("Name required"),
		price: yup
			.number("price must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("price required"),
		discount: yup
			.number("discount must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Discount ID required"),
		// gallery_image: yup.string().required("gallery_image required"),
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
		gallery_image: yup
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
			name: "",
			price: "",
			discount: "",
			rating: "",
			sale_count: "0",
			wishlist_count: "0",
			rating_count: "0",
			variation: "",
			image: "",
			gallery_image: "",
			short_description: "",
			full_description: "",
			shop_id: "",
			category_id: "",
		},
		resolver: yupResolver(addProductScema),
	});

	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	const changedCategory = (e) => {
		console.log(e.target.value);
		form.setValue("category_id", e.target.value);
	};

	const onSubmit = (data) => {
		console.log("FormData", data);
		console.log(errors);
		Axios.post(`${process.env.REACT_APP_API_URL}/product/addproduct`, {
			name: data.name,
			price: data.price,
			discount: data.discount,
			rating: Number(data.rating),
			sale_count: 0,
			wishlist_count: 0,
			rating_count: 0,
			variation: data.variation,
			image: ImageName,
			gallery_image: GallaryImageName,
			short_description: data.short_description,
			full_description: data.full_description,
			shop_id: Number(data.shop_id),
			category_id: Number(data.category_id),
		}).then((response) => {
			console.log(response.data);
		});
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
										<label htmlFor="category">
											Category
										</label>
										<br />
										<select
											name="category"
											id="category"
											onChange={changedCategory}
											defaultValue={0}
										>
											<option value="0">
												Select Category
											</option>
											{categoryNames &&
												categoryNames.map(
													(categories) => (
														<option
															key={categories.id}
															value={
																categories.id
															}
														>
															{categories.name}
														</option>
													)
												)}
										</select>
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
											onChange={handleImage}
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
											onChange={handleGalleryImage}
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

									<button className="auth-form__button">
										Add Product
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
