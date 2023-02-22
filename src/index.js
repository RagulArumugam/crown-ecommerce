import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
// import { UserProvider } from "./context/user.context";
// import { ProductsProvider } from "./context/products.context";
// import { CartProvider } from "./context/cart.context";
import { Provider } from "react-redux";
import { store, persistor } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe/stripe";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          {/* <UserProvider> */}
          {/* <ProductsProvider> */}
          {/* <CartProvider> */}
          {/* <Elements stripe={stripePromise}> */}
          <App />
          {/* </Elements> */}
          {/* </CartProvider> */}
          {/* </ProductsProvider> */}
          {/* </UserProvider> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
