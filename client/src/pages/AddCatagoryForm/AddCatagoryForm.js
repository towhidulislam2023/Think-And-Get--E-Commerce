import { yupResolver } from "@hookform/resolvers/yup";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

const AddcategoryForm = () => {
	const addcategoryScema = yup.object({
		category_name: yup.string().required("Category name required"),
		category_picture: yup
			.mixed()
			.required("Category Picture is required")
			.test("fileFormat", "Invalid file format", (value) => {
				if (value && value.length) {
					const file = value[0];
					return file && file.type.includes("image");
				}
				return false;
			}),
		category_url: yup
			.string()
			.url("Invalid URL format")
			.required("Category URL required"),
	});
	const form = useForm({
		defaultValues: {
			category_name: "",
			category_picture: "",
			category_url: "",
		},
		resolver: yupResolver(addcategoryScema),
	});

	const { register, handleSubmit, formState } = form;
	const { errors } = formState;

	// file upload
	const [categoryImage, setCategoryImage] = useState(null);
	const [categoryImageName, setCategoryImageName] = useState("");

	const handleCategoryImage = (e) => {
		const file = e.target.files[0];
		if (file) {
			setCategoryImage(file);
			setCategoryImageName(file.name);
		}
	};

	const onSubmit = (data) => {
		console.log("FormData", categoryImageName);
		Axios.post(`${process.env.REACT_APP_API_URL}/category/addcategory`, {
			name: data.category_name,
			image: categoryImageName,
			url: data.category_url,
		}).then((response) => {
			console.log(response.data);
			if (
				response.data.message ===
				data.category_name + " added successfully"
			) {
				alert("Category Added Successful");
			}
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
										<label htmlFor="category_name">
											Category Name
										</label>
										<input
											{...register("category_name")}
											type="text"
											name="category_name"
											id="category_name"
											placeholder="Enter category Name"
										/>
										<p className="text-danger">
											{errors.category_id?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category_picture">
											Category Picture
										</label>
										<input
											{...register("category_picture")}
											type="file"
											name="category_picture"
											id="category_picture"
											placeholder="Enter category Picture"
											onChange={handleCategoryImage}
										/>
										<p className="text-danger">
											{errors.category_picture?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category_url">
											Category url
										</label>
										<input
											{...register("category_url")}
											type="url"
											name="category_url"
											id="category_url"
											placeholder="Enter category Picture"
										/>
										<p className="text-danger">
											{errors.category_url?.message}
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

export default AddcategoryForm;
