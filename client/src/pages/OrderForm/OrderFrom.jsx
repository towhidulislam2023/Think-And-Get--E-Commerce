import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const OrderFrom = () => {
	const addOrderformScema = yup.object({
		id: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("ID required"),
		product_title: yup.string().required("Category name required"),
		product_category: yup.string().required("Category name required"),
		product_image: yup
			.mixed()
			.required("Category Picture is required")
			.test("fileFormat", "Invalid file format", (value) => {
				if (value && value.length) {
					const file = value[0];
					return file && file.type.includes("image");
				}
				return false;
			}),
		price: yup
			.number("price must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("price required"),
		discount: yup
			.number("discount must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Discount required"),
		order_status: yup
			.number("Order_status must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Order_status required"),
		customer_profile_id: yup
			.number("Customer_profile_id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("customer_profile_id required"),
	});
	const form = useForm({
		defaultValues: {
			id: "",
			product_title: "",
			product_category: "",
			product_image: "",
			price: "",
			discount: "",
			order_status: "",
			customer_profile_id:"",
		},
		resolver: yupResolver(addOrderformScema),
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
										<label htmlFor="id">Category Id</label>
										<input
											{...register("id")}
											type="number"
											name="id"
											id="id"
											placeholder="Enter  Id"
										/>
										<p className="text-danger">
											{errors.id?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="product_title">
											Product Title
										</label>
										<input
											{...register("product_title")}
											type="text"
											name="product_title"
											id="product_title"
											placeholder="Enter Product Title"
										/>
										<p className="text-danger">
											{errors.product_title?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="product_category">
											Product Category
										</label>
										<input
											{...register("product_category")}
											type="text"
											name="product_category"
											id="product_category"
											placeholder="Enter Product Category"
										/>
										<p className="text-danger">
											{errors.product_category?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="product_image">
											Product Image
										</label>
										<input
											{...register("product_image")}
											type="file"
											name="product_image"
											id="product_image"
											placeholder="Enter Product Image"
										/>
										<p className="text-danger">
											{errors.product_image?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="price">price</label>
										<input
											{...register("price")}
											type="number"
											name="price"
											id="price"
											placeholder="Enter  price"
										/>
										<p className="text-danger">
											{errors.price?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="discount">
											discount
										</label>
										<input
											{...register("discount")}
											type="number"
											name="discount"
											id="discount"
											placeholder="Enter  discount "
										/>
										<p className="text-danger">
											{errors.discount?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="order_status">
											order_status
										</label>
										<input
											{...register("order_status")}
											type="number"
											name="order_status"
											id="order_status"
											placeholder="Enter  order  status"
										/>
										<p className="text-danger">
											{errors.order_status?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="customer_profile_id">
											customer profile id
										</label>
										<input
											{...register("customer_profile_id")}
											type="number"
											name="customer_profile_id"
											id="customer_profile_id"
											placeholder="Enter  customer profile id"
										/>
										<p className="text-danger">
											{
												errors.customer_profile_id
													?.message
											}
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

export default OrderFrom;
