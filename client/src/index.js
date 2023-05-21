import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import axios from "axios";
import { store } from "./store/store";
import PersistProvider from "./store/providers/persist-provider";
import { setProducts } from "./store/slices/product-slice";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "animate.css";
import "swiper/swiper-bundle.min.css";
import "./assets/scss/style.scss";

// get product data from other source and set it to redux central state
axios
    .get(process.env.PUBLIC_URL + "/data/product.json")
    .then((response) => store.dispatch(setProducts(response.data)))
    .catch((error) => console.log(error));

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <PersistProvider>
            <App />
        </PersistProvider>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
