import React from "react";
import { PaymentElement } from "@stripe/react-stripe-js";
import Button from "../button/button";
import "./payment.scss";

const Payment = () => {
  return (
    <div>
      {/* <PaymentElement /> */}
      <Button buttonType={"inverted"}>Pay Now</Button>
    </div>
  );
};

export default Payment;
