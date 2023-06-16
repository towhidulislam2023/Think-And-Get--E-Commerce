import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const AddProductForm = () => {
    const addProductSchema = yup.object().shape({
        product_id: yup.number().typeError("Product ID must be a number").required("Product ID is required"),
        product_name: yup.string().required("Product Name is required"),
        product_price: yup.number().typeError("Product Price must be a number").required("Product Price is required"),
        product_discount_price: yup.number().typeError("Product Discount Price must be a number").required("Product Discount Price is required"),
        product_rating: yup.number().typeError("Product Rating must be a number").required("Product Rating is required"),
        product_sale_count: yup.number().typeError("Product Sale Count must be a number").required("Product Sale Count is required"),
        product_wishlist_count: yup.number().typeError("Product Wishlist Count must be a number").required("Product Wishlist Count is required"),
        product_ratting_count: yup.number().typeError("Product Rating Count must be a number").required("Product Rating Count is required"),
        product_category: yup.string().required("Product Category is required"),
        product_variation: yup.string().required("Product Variation is required"),
        product_picture: yup.mixed().required("Product Picture is required").test("fileFormat", "Invalid file format", (value) => {
            if (value && value.length) {
                const file = value[0];
                return file && file.type.includes("image");
            }
            return false;
        }),
        product_short_desc: yup.string().required("Product Short Description is required"),
        product_full_desc: yup.string().required("Product Full Description is required"),
        shop_id: yup.string().required("Shop ID is required"),
        category_id: yup.string().required("Category ID is required"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(addProductSchema),
    });

    const onSubmit = (data) => {
        console.log("FormData", data);
    };

    return (
        <div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120 mt-3">
            {/* auth page header */}
            <div className="auth-page-header space-mb--50">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h3 className="auth-page-header__title">Welcome</h3>
                            <p className="auth-page-header__text">Add Your Product</p>
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
                                        <label htmlFor="product_id">Product ID</label>
                                        <input
                                            {...register('product_id')}
                                            type="number"
                                            name="product_id"
                                            id="product_id"
                                            placeholder="Enter product Id"
                                        />
                                        <p className="text-danger">{errors.product_id?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_name">Product Name</label>
                                        <input
                                            {...register('product_name')}
                                            type="text"
                                            name="product_name"
                                            id="product_name"
                                            placeholder="Enter Product Name"
                                        />
                                        <p className="text-danger">{errors.product_name?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_price">Product Price</label>
                                        <input
                                            {...register('product_price')}
                                            type="number"
                                            name="product_price"
                                            id="product_price"
                                            placeholder="Enter Product Price"
                                        />
                                        <p className="text-danger">{errors.product_price?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_discount_price">Product Discount Price</label>
                                        <input
                                            {...register('product_discount_price')}
                                            type="number"
                                            name="product_discount_price"
                                            id="product_discount_price"
                                            placeholder="Enter Product Discount Price"
                                        />
                                        <p className="text-danger">{errors.product_discount_price?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_rating">Product Rating</label>
                                        <input
                                            {...register('product_rating')}
                                            type="number"
                                            name="product_rating"
                                            id="product_rating"
                                            placeholder="Enter Product Rating"
                                        />
                                        <p className="text-danger">{errors.product_rating?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_sale_count">Product Sale Count</label>
                                        <input
                                            {...register('product_sale_count')}
                                            type="number"
                                            name="product_sale_count"
                                            id="product_sale_count"
                                            placeholder="Enter Product Sale Count"
                                        />
                                        <p className="text-danger">{errors.product_sale_count?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_wishlist_count">Product Wishlist Count</label>
                                        <input
                                            {...register('product_wishlist_count')}
                                            type="number"
                                            name="product_wishlist_count"
                                            id="product_wishlist_count"
                                            placeholder="Enter Product Wishlist Count"
                                        />
                                        <p className="text-danger">{errors.product_wishlist_count?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_rating_count">Product Rating Count</label>
                                        <input
                                            {...register('product_rating_count')}
                                            type="number"
                                            name="product_rating_count"
                                            id="product_rating_count"
                                            placeholder="Enter Product Rating Count"
                                        />
                                        <p className="text-danger">{errors.product_rating_count?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_category">Product Category</label>
                                        <input
                                            {...register('product_category')}
                                            type="text"
                                            name="product_category"
                                            id="product_category"
                                            placeholder="Enter Product Category"
                                        />
                                        <p className="text-danger">{errors.product_category?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_variation">Product Variation</label>
                                        <input
                                            {...register('product_variation')}
                                            type="text"
                                            name="product_variation"
                                            id="product_variation"
                                            placeholder="Enter Product Variation"
                                        />
                                        <p className="text-danger">{errors.product_variation?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_picture">Product Picture</label>
                                        <input
                                            {...register('product_picture')}
                                            type="file"
                                            name="product_picture"
                                            id="product_picture"
                                        />
                                        <p className="text-danger">{errors.product_picture?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_short_desc">Product Short Description</label>
                                        <input
                                            {...register('product_short_desc')}
                                            type="text"
                                            name="product_short_desc"
                                            id="product_short_desc"
                                            placeholder="Enter Product Short Description"
                                        />
                                        <p className="text-danger">{errors.product_short_desc?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="product_full_desc">Product Full Description</label>
                                        <textarea
                                            {...register('product_full_desc')}
                                            name="product_full_desc"
                                            id="product_full_desc"
                                            placeholder="Enter Product Full Description"
                                        ></textarea>
                                        <p className="text-danger">{errors.product_full_desc?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="shop_id">Shop ID</label>
                                        <input
                                            {...register('shop_id')}
                                            type="text"
                                            name="shop_id"
                                            id="shop_id"
                                            placeholder="Enter Shop ID"
                                        />
                                        <p className="text-danger">{errors.shop_id?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_id">Category ID</label>
                                        <input
                                            {...register('category_id')}
                                            type="text"
                                            name="category_id"
                                            id="category_id"
                                            placeholder="Enter Category ID"
                                        />
                                        <p className="text-danger">{errors.category_id?.message}</p>
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <button type="submit" className="auth-form__button">
                                            Add Product
                                        </button>
                                    </div>
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
