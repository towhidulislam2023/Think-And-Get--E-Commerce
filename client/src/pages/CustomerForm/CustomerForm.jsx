import React from "react";

const CustomerForm = () => {
	const addCustomerScema = yup.object({
		id: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		name: yup.string().required("name name required"),
		image: yup
			.mixed()
			.required("image is required")
			.test("fileFormat", "Invalid file format", (value) => {
				if (value && value.length) {
					const file = value[0];
					return file && file.type.includes("image");
				}
				return false;
			}),
		point: yup.string().required("point name required"),
		level: yup.string().required("level name required"),
		user_name: yup.string().required("user_name name required"),
		password: yup.string().required("password name required"),
		phone: yup.string().required("phone name required"),
		email: yup.string().required("email name required"),
		shipping_address: yup.string().required("Category name required"),
		total_order: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		to_be_shipped: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		review_count: yup
			.number("Id must be number")
			.transform((value) => (isNaN(value) ? undefined : value))
			.required("Category ID required"),
		offer: yup.string().required("offer name required"),
	});
	const form = useForm({
		defaultValues: {
			id: "",
			name: "",
			image: "",
			point: "",
			level: "",
			user_name: "",
			password: "",
			phone: "",
			email: "",
			shipping_address: "",
			total_order: "",
			to_be_shipped: "",
			review_count: "",
			offer: "",
		},
		resolver: yupResolver(addCustomerScema),
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
										<label htmlFor="id">id</label>
										<input
											{...register("id")}
											type="number"
											name="id"
											id="id"
											placeholder="Enter id"
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
											placeholder="Enter name"
										/>
										<p className="text-danger">
											{errors.name?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="image">image</label>
										<input
											{...register("image")}
											type="file"
											name="image"
											id="image"
											placeholder="Enter image"
										/>
										<p className="text-danger">
											{errors.image?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="point">Point</label>
										<input
											{...register("point")}
											type="text"
											name="point"
											id="point"
											placeholder="Enter Point"
										/>
										<p className="text-danger">
											{errors.point?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="level">Level</label>
										<input
											{...register("level")}
											type="text"
											name="level"
											id="level"
											placeholder="Enter Level"
										/>
										<p className="text-danger">
											{errors.level?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="user_name">
											User Name
										</label>
										<input
											{...register("user_name")}
											type="text"
											name="user_name"
											id="user_name"
											placeholder="Enter User Name"
										/>
										<p className="text-danger">
											{errors.user_name?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="password">
											Password
										</label>
										<input
											{...register("password")}
											type="password"
											name="password"
											id="password"
											placeholder="Enter Password"
										/>
										<p className="text-danger">
											{errors.password?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="phone">Phone</label>
										<input
											{...register("phone")}
											type="text"
											name="phone"
											id="phone"
											placeholder="Enter Phone"
										/>
										<p className="text-danger">
											{errors.phone?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="email">Email</label>
										<input
											{...register("email")}
											type="text"
											name="email"
											id="email"
											placeholder="Enter Email"
										/>
										<p className="text-danger">
											{errors.email?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="shipping_address">
											Shipping Address
										</label>
										<input
											{...register("shipping_address")}
											type="text"
											name="shipping_address"
											id="shipping_address"
											placeholder="Enter Shipping Address"
										/>
										<p className="text-danger">
											{errors.shipping_address?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="total_order">
											Total Order
										</label>
										<input
											{...register("total_order")}
											type="number"
											name="total_order"
											id="total_order"
											placeholder="Enter Total Order"
										/>
										<p className="text-danger">
											{errors.total_order?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="to_be_shipped">
											To be Shipped
										</label>
										<input
											{...register("to_be_shipped")}
											type="number"
											name="to_be_shipped"
											id="to_be_shipped"
											placeholder="Enter To be Shipped"
										/>
										<p className="text-danger">
											{errors.to_be_shipped?.message}
										</p>
									</div>

									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="review_count">
											Review Count
										</label>
										<input
											{...register("review_count")}
											type="number"
											name="review_count"
											id="review_count"
											placeholder="Enter Review Count"
										/>
										<p className="text-danger">
											{errors.review_count?.message}
										</p>
									</div>
									<div className="auth-form__single-field space-mb--30">
										<label htmlFor="offer">Offer</label>
										<input
											{...register("offer")}
											type="text"
											name="offer"
											id="offer"
											placeholder="Enter Offer"
										/>
										<p className="text-danger">
											{errors.offer?.message}
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

export default CustomerForm;
