
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
const VariationImage = () => {
   const addVariationImageScema = yup.object({
		id: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required(" ID required"),
		color: yup.string().required("Category name required"),
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
		stock: yup
			.number("Stock must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required(" Stock required"),
		product_id: yup
			.number("Stock must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required(" Stock required"),
   });
   const form = useForm({
		defaultValues: {
			id: "",
			color: "",
			image: "",
			stock: "",
			product_id: "",
		},
		resolver: yupResolver(addVariationImageScema),
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
										<label htmlFor="category_id">Id</label>
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
										<label htmlFor="color">Color</label>
										<input
											{...register("color")}
											type="text"
											name="color"
											id="color"
											placeholder="Enter color Name"
										/>
										<p className="text-danger">
											{errors.color?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="image">Image</label>
										<input
											{...register("image")}
											type="file"
											name="image"
											id="image"
											placeholder="Enter Image"
										/>
										<p className="text-danger">
											{errors.image?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category_id">
											Stock
										</label>
										<input
											{...register("stock")}
											type="number"
											name="stock"
											id="stock"
											placeholder="Stock"
										/>
										<p className="text-danger">
											{errors.stock?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="category_id">
											Product Id
										</label>
										<input
											{...register("product_id")}
											type="number"
											name="product_id"
											id="product_id"
											placeholder="Product id"
										/>
										<p className="text-danger">
											{errors.product_id?.message}
										</p>
									</div>
									<button className="auth-form__button">
										Add Variation Image
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* auth page footer */}
		</div>
   );;
};

export default VariationImage;