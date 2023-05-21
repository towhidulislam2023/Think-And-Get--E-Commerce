import { Fragment } from "react";
import { Preloader, ErrorMessage, Breadcrumb } from "../../components";
import { FaRegCheckCircle, FaRegTimesCircle, FaRedo } from "react-icons/fa";
import { getDiscountPrice } from "../../helpers/product";
import useFetch from "../../hooks/use-fetch";

const Order = () => {
    const { data, isLoading, errorMessage } = useFetch("order.json");

    if (isLoading) return <Preloader />;
    if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;

    return (
        <div className="body-wrapper space-pt--70 space-pb--120">
            <Breadcrumb pageTitle="Orders" prevUrl="/home" />
            <div className="order-product-area">
                {data?.map((single) => (
                    <div
                        className="cart-product border-bottom--medium"
                        key={single.id}
                    >
                        <div className="cart-product__image">
                            <img
                                src={
                                    process.env.PUBLIC_URL + single.productImage
                                }
                                className="img-fluid"
                                alt=""
                            />
                        </div>
                        <div className="cart-product__content">
                            <h3 className="title">{single.productTitle}</h3>
                            <span className="category">
                                {single.productCategory}
                            </span>
                            <div className="price">
                                {single.discount && single.discount > 0 ? (
                                    <Fragment>
                                        <span className="main-price me-1">{`$${single.price}`}</span>
                                        <span className="discounted-price">{`$${getDiscountPrice(
                                            single.price,
                                            single.discount
                                        )}`}</span>
                                    </Fragment>
                                ) : (
                                    <span className="discounted-price">{`$${single.price}`}</span>
                                )}
                            </div>
                        </div>
                        <div className="cart-product__status">
                            <p>
                                <span>
                                    {single.orderStatus === "completed" ? (
                                        <FaRegCheckCircle />
                                    ) : single.orderStatus === "cancelled" ? (
                                        <FaRegTimesCircle />
                                    ) : (
                                        <FaRedo />
                                    )}
                                </span>{" "}
                                {single.orderStatus}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Order;
