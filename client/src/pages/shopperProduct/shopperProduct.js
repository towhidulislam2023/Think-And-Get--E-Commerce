import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const ShopperProduct = () => {
	const ShopperProductSchema = yup.object({
		id: yup
			.number("Id must be a number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		name: yup.string().required("Name is required"),
		price: yup.number().required("Price is required"),
		discount: yup.number().required("Discount is required"),
		product_count: yup.number().required("Product count is required"),
		sale_count: yup.number().required("Sale count is required"),
		wishlist_count: yup.number().required("Wishlist count is required"),
		ratting_count: yup.number().required("Rating count is required"),
		product_id: yup.string().required("Product ID is required"),
	});

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		defaultValues: {
			id: "",
			name: "",
			price: "",
			discount: "",
			product_count: "",
			sale_count: "",
			wishlist_count: "",
			ratting_count: "",
			product_id: "",
		},
		resolver: yupResolver(ShopperProductSchema),
	});

	const onSubmit = (data) => {
		console.log("FormData", data);
		console.log(errors);
	};

	return (
		<div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120 mt-3">
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
			<div className="auth-page-body">
				<div className="container">
					<div className="row">
						<div className="col-12">
							<div className="auth-form">
								<form onSubmit={handleSubmit(onSubmit)}>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="id">Id</label>
										<input
											{...register("id")}
											type="number"
											name="id"
											id="id"
											placeholder="Id"
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
										<label htmlFor="product_count">
											Product Count
										</label>
										<input
											{...register("product_count")}
											type="number"
											name="product_count"
											id="product_count"
											placeholder="Enter Product Count"
										/>
										<p className="text-danger">
											{errors.product_count?.message}
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
										<label htmlFor="ratting_count">
											Rating Count
										</label>
										<input
											{...register("ratting_count")}
											type="number"
											name="ratting_count"
											id="ratting_count"
											placeholder="Enter Rating Count"
										/>
										<p className="text-danger">
											{errors.ratting_count?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="product_id">
											Product ID
										</label>
										<input
											{...register("product_id")}
											type="text"
											name="product_id"
											id="product_id"
											placeholder="Enter Product ID"
										/>
										<p className="text-danger">
											{errors.product_id?.message}
										</p>
									</div>
									<button
										type="submit"
										className="auth-form__button"
									>
										Add Shopper Product
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ShopperProduct;
