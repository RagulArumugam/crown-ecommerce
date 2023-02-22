import React from "react";
import CheckoutComponent from "../../components/checkout/checkout";
import Payment from "../../components/payment-form/payment";
import "./checkout.scss";

const Checkout = () => {
  return (
    <div>
      <h1> Checkout Page</h1>
      <CheckoutComponent />
      <Payment />
    </div>
  );
};

export default Checkout;
