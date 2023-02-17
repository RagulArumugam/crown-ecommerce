import React, { useState } from "react";
import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase";
import Button from "../button/button";
import FormInput from "../form-input/form-input";
import "./sign-up.scss";

const defaultFormFiels = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp = () => {
  const [formFields, setFormFields] = useState(defaultFormFiels);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const resetFormFields = () => {
    setFormFields(defaultFormFiels);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password === confirmPassword) {
      try {
        const { user } = await createAuthUserWithEmailAndPassword({
          email,
          password,
        });
        await createUserDocumentFromAuth(user, { displayName });
        resetFormFields();
      } catch (err) {
        if (err.code === "auth/email-already-in-use") {
          alert("Cannot create user, email already in use");
        } else {
          console.log("error on creating user with email and password", err);
        }
      }
    } else {
      alert("password doest macth");
      return;
    }
  };

  return (
    <div className="sign-up-continer">
      <h2>Dont have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSignup}>
        <FormInput
          label={"Display Name"}
          type="text"
          onChange={(e) => {
            handleChange(e);
          }}
          name="displayName"
          value={displayName}
          required
        />
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
        <FormInput
          label={"Confirm Password"}
          type="password"
          value={confirmPassword}
          onChange={(e) => {
            handleChange(e);
          }}
          name="confirmPassword"
          required
        />
        <Button type="submit">Sign up</Button>
      </form>
    </div>
  );
};

export default SignUp;
