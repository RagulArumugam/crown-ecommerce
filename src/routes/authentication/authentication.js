import React, { useEffect } from "react";
import SignUp from "../../components/sign-up/sign-up";
import SignIn from "../../components/sign-in/sign-in";
import "./authentication.scss";
import { Fragment } from "react";

const Authentication = () => {
  //  useEffect( async() => {
  //     //to get the data eventhoiught the page redirects
  //     const res = await getRedirectResult(auth);
  //     if(res){
  //         const userRef = await createUserDocumentFromAuth(res.user);
  //     }
  //     console.log(res);
  //  }, [])

  //  const logGoogleUserRedirect = async() => {
  //     const {user} = await signInWithGoogleRedirect();
  //     console.log(user);
  //  }
  {
    /* <button onClick={signInWithGoogleRedirect}>
    Sign in with Google Redirect
</button> */
  }

  return (
    <Fragment>
      <h1 className="page-header">Sign In Page</h1>
      <div className="authentication-container">
        {/* <button onClick={logGoogleuser}>Sign in with Google Popup</button> */}
        <SignIn />
        <SignUp />
      </div>
    </Fragment>
  );
};

export default Authentication;
