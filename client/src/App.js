import React, { lazy, Suspense } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Outlet,
} from "react-router-dom";

import { DefaultLayout } from "./layouts";
import { Preloader } from "./components";
import ScrollToTop from "./helpers/scroll-top";
import AddCatagoryForm from "./pages/AddCatagoryForm/AddCatagoryForm";
import AddProductForm from "./pages/AddProductForm/AddProductForm";
import ShopperProduct from "./pages/shopperProduct/shopperProduct";

const Welcome = lazy(() => import("./pages/Welcome"));
const Register = lazy(() => import("./pages/Register"));
const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const Shop = lazy(() => import("./pages/Shop"));
const Product = lazy(() => import("./pages/Product"));
const Chat = lazy(() => import("./pages/Chat"));
const Cart = lazy(() => import("./pages/Cart"));
const Wishlist = lazy(() => import("./pages/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Search = lazy(() => import("./pages/Search"));
const Profile = lazy(() => import("./pages/Profile"));
const EditProfile = lazy(() => import("./pages/EditProfile"));
const Notification = lazy(() => import("./pages/Notification"));
const Contact = lazy(() => import("./pages/Contact"));
const Order = lazy(() => import("./pages/Order"));

function App() {
    return (
        <Router>
            <ScrollToTop>
                <Suspense fallback={<Preloader />}>
                    <Routes>
                        <Route
                            path={process.env.PUBLIC_URL + "/"}
                            element={<Welcome />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/welcome"}
                            element={<Welcome />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/register"}
                            element={<Register />}
                        />
                        <Route
                            path={process.env.PUBLIC_URL + "/login"}
                            element={<Login />}
                        />
                        <Route
                            element={
                                <DefaultLayout>
                                    {" "}
                                    <Outlet />{" "}
                                </DefaultLayout>
                            }
                        >
                            <Route
                                path={process.env.PUBLIC_URL + "/home"}
                                element={<Home />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/shop"}
                                element={<Shop />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/product/:id"}
                                element={<Product />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/chat"}
                                element={<Chat />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/cart"}
                                element={<Cart />}
                            />
                            {/* TODO: Delete This After Work done  */}
                            <Route
                                path={process.env.PUBLIC_URL + "/ShopperProduct"}
                                element={<ShopperProduct></ShopperProduct>}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/addproduct"}
                                element={<AddProductForm></AddProductForm>}
                            />
                            {/* TODO: need DELETE OR REMOVE EXTRA THIS CODE  */}
                            <Route
                                path={process.env.PUBLIC_URL + "/wishlist"}
                                element={<Wishlist />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/checkout"}
                                element={<Checkout />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/search"}
                                element={<Search />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/profile"}
                                element={<Profile />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/edit-profile"}
                                element={<EditProfile />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/notification"}
                                element={<Notification />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/contact"}
                                element={<Contact />}
                            />
                            <Route
                                path={process.env.PUBLIC_URL + "/order"}
                                element={<Order />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Route>
                    </Routes>
                </Suspense>
            </ScrollToTop>
        </Router>
    );
}

export default App;
