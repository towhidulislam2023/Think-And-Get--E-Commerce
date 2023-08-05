import React, { Fragment, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Breadcrumb } from "../../components";
import { cartItemStock, getDiscountPrice } from "../../helpers/product";
import {
	addToCart,
	decreaseQuantity,
	increaseQuantity,
} from "../../store/slices/cart-slice";

const Cart = () => {
	let cartTotalPrice = 0;

	const [quantityCount] = useState(1);
	const dispatch = useDispatch();
	const { cartItems } = useSelector((state) => state.cart);

	console.log(cartItems);

	return (
		<div className="body-wrapper space-pt--70 space-pb--120">
			<Breadcrumb pageTitle="Cart" prevUrl="/home" />
			{cartItems && cartItems.length >= 1 ? (
				<Fragment>
					<div className="cart-product-area">
						{cartItems.map((cartItem, key) => {
							const discountedPrice = getDiscountPrice(
								cartItem.price,
								cartItem.discount
							);

							discountedPrice != null
								? (cartTotalPrice +=
										discountedPrice * cartItem.quantity)
								: (cartTotalPrice +=
										cartItem.price * cartItem.quantity);
							return (
								<div
									className="cart-product border-bottom--medium"
									key={key}
								>
									<div className="cart-product__image">
										<Link
											to={
												process.env.PUBLIC_URL +
												`/product/${cartItem.id}`
											}
										>
											<img
												src={
													process.env.PUBLIC_URL +
													cartItem.image
												}
												className="img-fluid"
												alt=""
											/>
										</Link>
									</div>
									<div className="cart-product__content">
										<h3 className="title">
											<Link
												to={
													process.env.PUBLIC_URL +
													`/product/${cartItem.id}`
												}
											>
												{cartItem.name}
											</Link>
										</h3>
										{/* <span className="category">
                                            {cartItem.category.map(
                                                (item, index, arr) => {
                                                    return (
                                                        item +
                                                        (index !==
                                                        arr.length - 1
                                                            ? ", "
                                                            : "")
                                                    );
                                                }
                                            )}
                                        </span> */}
										<div className="price">
											{cartItem.discount &&
											cartItem.discount > 0 ? (
												<Fragment>
													<span className="main-price me-1">{`$${cartItem.price}`}</span>
													<span className="discounted-price">{`$${getDiscountPrice(
														cartItem.price,
														cartItem.discount
													)}`}</span>
												</Fragment>
											) : (
												<span className="discounted-price">{`$${cartItem.price}`}</span>
											)}
										</div>
									</div>
									<div className="cart-product__counter">
										<div className="cart-plus-minus">
											<button
												className="dec qtybutton"
												onClick={() =>
													dispatch(
														decreaseQuantity(
															cartItem
														)
													)
												}
											>
												-
											</button>
											<input
												className="cart-plus-minus-box"
												type="text"
												value={cartItem.quantity}
												readOnly
											/>
											<button
												className="inc qtybutton"
												onClick={() =>
													dispatch(
														increaseQuantity({
															cartItem,
															quantity:
																cartItem.quantity,
														})
													)
												}
												disabled={
													cartItem !== undefined &&
													cartItem.quantity &&
													cartItem.quantity >=
														cartItemStock(cartItem)
												}
											>
												+
											</button>
										</div>
									</div>
								</div>
							);
						})}
					</div>
					<div className="discount-code-wrapper space-mt--20">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="title-wrap">
										<h4 className="cart-bottom-title">
											Use Coupon Code
										</h4>
									</div>
									<div className="discount-code">
										<p>
											Enter your coupon code if you have
											one.
										</p>
										<form>
											<input
												type="text"
												required
												name="name"
											/>
											<button
												className="cart-btn-2"
												type="submit"
											>
												Apply Coupon
											</button>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="grand-total space-mt--20">
						<div className="container">
							<div className="row">
								<div className="col-12">
									<div className="title-wrap">
										<h4 className="cart-bottom-title">
											Cart Total
										</h4>
									</div>
									<h5>
										Total price{" "}
										<span>
											${cartTotalPrice.toFixed(2)}
										</span>
									</h5>

									<h4 className="grand-total-title">
										Grand Total{" "}
										<span>
											${cartTotalPrice.toFixed(2)}
										</span>
									</h4>
									<Link
										to={
											process.env.PUBLIC_URL + "/checkout"
										}
									>
										Proceed to Checkout
									</Link>
								</div>
							</div>
						</div>
					</div>
				</Fragment>
			) : (
				<div className="no-items-found">
					<div className="no-items-found__image">
						<ReactSVG
							src={
								process.env.PUBLIC_URL +
								"/assets/img/icons/cart.svg"
							}
						/>
					</div>
					<div className="no-items-found__content">
						<p>
							No Items in the cart.{" "}
							<Link to={process.env.PUBLIC_URL + "/shop"}>
								Add Some
							</Link>
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default Cart;
