import React from 'react';

const AddProductForm = () => {
    return (
        <div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120 mt-3">
            {/* auth page header  */}
            <div className="auth-page-header space-mb--50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="auth-page-header__title">Welcome</h3>
                            <p className="auth-page-header__text">
                                Add Your Productv - Hello 03
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
                            {/* Auth form is now theren for test  */}
                            <div className="auth-form">
                                <form>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_id">Product Id</label>
                                        <input
                                            type="number"
                                            name="product_id"
                                            id="product_id"
                                            placeholder="Enter product Id"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_name">
                                            Product Name
                                        </label>
                                        <input
                                            type="text"
                                            name="product_name"
                                            id="product_name"
                                            placeholder="Enter Product Name"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_price">
                                            Product Price 
                                        </label>
                                        <input
                                            type="text"
                                            name="product_price"
                                            id="product_price"
                                            placeholder="Enter Product Price"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_discount_price">
                                            Product Discount Price
                                        </label>
                                        <input
                                            type="text"
                                            name="product_discount_price"
                                            id="product_discount_price"
                                            placeholder="Enter Product Discount Price"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_rating">
                                            Product Rating
                                        </label>
                                        <input
                                            type="text"
                                            name="product_rating"
                                            id="product_rating"
                                            placeholder="Enter Product Rating"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_sale_count">
                                            Product Sale Count
                                        </label>
                                        <input
                                            type="text"
                                            name="product_sale_count"
                                            id="product_sale_count"
                                            placeholder="Enter Product Sale Count"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_wishlist_count">
                                            Product wishlist Count
                                        </label>
                                        <input
                                            type="text"
                                            name="product_wishlist_count"
                                            id="product_wishlist_count"
                                            placeholder="Enter Product wishlist Count"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_ratting_count">
                                            Product Ratting Count - test-2
                                        </label>
                                        <input
                                            type="text"
                                            name="product_ratting_count"
                                            id="product_ratting_count"
                                            placeholder="Enter Product Ratting Count"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_category">
                                            Product Category
                                        </label>
                                        <input
                                            type="text"
                                            name="product_category"
                                            id="product_category"
                                            placeholder="Enter Product Category"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_variation">
                                            Product Variation
                                        </label>
                                        <input
                                            type="text"
                                            name="product_variation"
                                            id="product_variation"
                                            placeholder="Enter Product Variation"
                                        />
                                    </div>
                                    

                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_picture">
                                            Product Image
                                        </label>
                                        <input
                                            type="file"
                                            name="product_picture"
                                            id="product_picture"
                                            placeholder="Enter Product Picture"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_variation">
                                            Product Short Description
                                        </label>
                                        <input
                                            type="text"
                                            name="product_short_desc"
                                            id="product_short_desc"
                                            placeholder="Enter Product Short Description"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_variation">
                                            Product Full Description
                                        </label>
                                        <input
                                            type="text"
                                            name="product_full_desc"
                                            id="product_full_desc"
                                            placeholder="Enter Product Full Description"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="shop_id">
                                            Shop Id
                                        </label>
                                        <input
                                            type="number"
                                            name="shop_id"
                                            id="shop_id"
                                            placeholder="shop_id"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_id">
                                            Category Id
                                        </label>
                                        <input
                                            type="number"
                                            name="category_id"
                                            id="category_id"
                                            placeholder="category_id"
                                        />
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