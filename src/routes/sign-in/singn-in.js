import React, { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import {
  auth,
  createUserDocumentFromAuth,
  signInwithGooglePopup,
  signInWithGoogleRedirect,
} from "../../utils/firebase/firebase";
import SignUp from "../../components/sign-up/sign-up";

const SignIn = () => {
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

  const logGoogleuser = async () => {
    const res = await signInwithGooglePopup();
    const userRef = await createUserDocumentFromAuth(res.user);
  };

  return (
    <div>
      <button onClick={logGoogleuser}>Sign in with Google Popup</button>
      <SignUp />
    </div>
  );
};

export default SignIn;
