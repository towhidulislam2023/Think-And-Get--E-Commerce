import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useDispatch, useSelector } from "react-redux";
import { Rating } from "../../components";
import Swiper, { SwiperSlide } from "../../components/swiper";
import { addToWishlist } from "../../store/slices/wishlist-slice";
import { addToCart } from "../../store/slices/cart-slice";

import {
    getDiscountPrice,
    getProductCartQuantity,
} from "../../helpers/product";

const Product = () => {
    let { id } = useParams();
    const { products } = useSelector((state) => state.product);
    const product = products.find((product) => product.id === id);
    const { cartItems } = useSelector((state) => state.cart);
    const { wishlistItems } = useSelector((state) => state.wishlist);
    const wishlistItem = wishlistItems.find((item) => item.id === product.id);
    const dispatch = useDispatch();

    const [selectedProductColor, setSelectedProductColor] = useState(
        product.variation ? product.variation[0].color : ""
    );
    const [productStock, setProductStock] = useState(
        product.variation ? product.variation[0].stock : product.stock
    );
    const [quantityCount, setQuantityCount] = useState(1);
    const productCartQty = getProductCartQuantity(
        cartItems,
        product,
        selectedProductColor
    );

    return (
        <div className="body-wrapper space-pt--70 space-pb--120">
            {/*====================  product image slider ====================*/}
            <div className="product-image-slider-wrapper space-pb--30 space-mb--30">
                {!!product?.galleryImage.length && (
                    <Swiper>
                        {product.galleryImage.map((single, key) => {
                            return (
                                <SwiperSlide key={key}>
                                    <div className="product-image-single swiper-slide">
                                        <img
                                            src={
                                                process.env.PUBLIC_URL + single
                                            }
                                            className="img-fluid"
                                            alt=""
                                        />
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                )}
            </div>
            {/*====================  End of product image slider  ====================*/}

            {/*====================  product content ====================*/}
            {/* product content header */}
            <div className="product-content-header-area border-bottom--thick space-pb--30">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="product-content-header">
                                <div className="product-content-header__main-info">
                                    <h3 className="title">{product.name}</h3>
                                    <div className="price">
                                        {product.discount &&
                                        product.discount > 0 ? (
                                            <Fragment>
                                                <span className="main-price me-1">{`$${product.price}`}</span>
                                                <span className="discounted-price">{`$${getDiscountPrice(
                                                    product.price,
                                                    product.discount
                                                )}`}</span>
                                            </Fragment>
                                        ) : (
                                            <span className="discounted-price">{`$${product.price}`}</span>
                                        )}
                                    </div>
                                    <div className="rating">
                                        {product.rating > 1 ? (
                                            <Fragment>
                                                <ul className="rating__stars">
                                                    <Rating
                                                        ratingValue={
                                                            product.rating
                                                        }
                                                    />
                                                </ul>
                                                <span className="rating__text">
                                                    {product.ratingCount}
                                                </span>
                                            </Fragment>
                                        ) : (
                                            ""
                                        )}
                                    </div>
                                </div>
                                <div className="product-content-header__wishlist-info text-center">
                                    <ReactSVG
                                        src={
                                            process.env.PUBLIC_URL +
                                            "/assets/img/icons/heart-dark.svg"
                                        }
                                    />
                                    <span className="count">
                                        {product.wishlistCount}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* product content description */}
            <div className="product-content-description border-bottom--thick space-pt--25 space-pb--25">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <p className="space-mb--25">
                                {product.shortDescription}
                            </p>
                            <h4 className="space-mb--5">Free Shipping</h4>
                            <p>
                                To Bangladesh from seller via china. Shipping{" "}
                                <br /> method online.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* product content safety */}
            <div className="product-content-safety border-bottom--thick space-pt--15 space-pb--15">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4>
                                <ReactSVG
                                    src={
                                        process.env.PUBLIC_URL +
                                        "/assets/img/icons/security.svg"
                                    }
                                />{" "}
                                Secure Payment Method.
                            </h4>
                        </div>
                    </div>
                </div>
            </div>
            {product.variation ? (
                <div className="product-color-picker border-bottom--thick space-pt--25 space-pb--25">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h3 className="space-mb--20">Color Select</h3>
                                <form>
                                    <ul className="color-picker">
                                        {product.variation.map((el, key) => {
                                            return (
                                                <li key={key}>
                                                    <input
                                                        id={el.color}
                                                        type="radio"
                                                        name="color"
                                                        defaultValue={el.color}
                                                        defaultChecked={
                                                            key === 0
                                                                ? true
                                                                : false
                                                        }
                                                        onChange={() => {
                                                            setSelectedProductColor(
                                                                el.color
                                                            );
                                                            setProductStock(
                                                                el.stock
                                                            );
                                                            setQuantityCount(1);
                                                        }}
                                                    />
                                                    <label
                                                        className={el.color}
                                                        htmlFor={el.color}
                                                    />
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                ""
            )}

            {/* product content description */}
            <div className="product-content-description space-pt--25 space-pb--25">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="space-mb--5">Specification</h4>
                            <p>{product.fullDescription}</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* shop product button */}
            <div className="shop-product-button">
                <button
                    className="wishlist"
                    disabled={wishlistItem !== undefined}
                    onClick={() => dispatch(addToWishlist(product))}
                >
                    {wishlistItem !== undefined
                        ? "ADDED TO WISHLIST"
                        : "ADD TO WISHLIST"}
                </button>
                {productStock && productStock > 0 ? (
                    <button
                        className="cart"
                        onClick={() =>
                            dispatch(
                                addToCart({
                                    ...product,
                                    quantity: quantityCount,
                                    selectedProductColor: selectedProductColor
                                        ? selectedProductColor
                                        : product.selectedProductColor
                                        ? product.selectedProductColor
                                        : null,
                                })
                            )
                        }
                        disabled={productCartQty >= productStock}
                    >
                        {productCartQty >= productStock
                            ? "STOCK END"
                            : "ADD TO CART"}
                    </button>
                ) : (
                    <button className="cart" disabled>
                        OUT OF STOCK
                    </button>
                )}
            </div>
            {/*====================  End of product content  ====================*/}
        </div>
    );
};

export default Product;
