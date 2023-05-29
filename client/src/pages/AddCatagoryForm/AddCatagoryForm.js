import React from 'react';
import { ReactSVG } from "react-svg";
import { Link } from "react-router-dom";
const AddcategoryForm = () => {
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
                                <form>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_id">Category Id</label>
                                        <input
                                            type="number"
                                            name="category_id"
                                            id="category_id"
                                            placeholder="Enter category Id"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_name">
                                            Category Name
                                        </label>
                                        <input
                                            type="text"
                                            name="category_name"
                                            id="category_name"
                                            placeholder="Enter category Name"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_picture">
                                            Password
                                        </label>
                                        <input
                                            type="file"
                                            name="category_picture"
                                            id="category_picture"
                                            placeholder="Enter category Picture"
                                        />
                                    </div>
                                    <div className="auth-form__single-field space-mb--30">
                                        <label htmlFor="category_url">
                                            url 
                                        </label>
                                        <input
                                            type="url"
                                            name="category_url"
                                            id="category_url"
                                            placeholder="Enter category Picture"
                                        />
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