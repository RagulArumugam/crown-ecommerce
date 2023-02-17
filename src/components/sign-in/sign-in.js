import React, { useState } from "react";
import {
  createUserDocumentFromAuth,
  signInUserWithEmailAndPassword,
  signInwithGooglePopup,
} from "../../utils/firebase/firebase";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-in.scss";

const defaultFormFiels = {
  email: "",
  password: "",
};
const SignIn = () => {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const { email, password } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFiels);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const res = await signInUserWithEmailAndPassword({ email, password });
      console.log(res);
      resetFormFields();
    } catch (err) {
      if (err.code === "auth/wrong-password") {
        alert("incorrect password for email");
      }
      if (err.code === "auth/user-not-found") {
        alert("No user associated with this email");
      }
      console.log(err);
    }
  };

  const logGoogleuser = async () => {
    try {
      const res = await signInwithGooglePopup();
      await createUserDocumentFromAuth(res.user);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-continer">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignup}>
        <FormInput
          label={"Email"}
          type="email"
          onChange={(e) => {
            handleChange(e);
          }}
          name="email"
          value={email}
          required
        />
        <FormInput
          label={"Passowrd"}
          type="password"
          onChange={(e) => {
            handleChange(e);
          }}
          name="password"
          value={password}
          required
        />
        <div className="buttons-container">
          <Button type="submit">Sign Ip</Button>
          <Button type="button" onClick={logGoogleuser} buttonType={"google"}>
            Sign In With Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
