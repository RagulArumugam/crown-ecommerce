import React from "react"
import { createUserDocumentFromAuth, signInwithGooglePopup } from "../../utils/firebase/firebase"

const SignIn = () => {
 const logGoogleuser = async() => {
    const res = await signInwithGooglePopup()
    const userRef = await createUserDocumentFromAuth(res.user);
 } 
 return(
    <div>
        <h3>this is sign in page</h3>
        <button onClick={logGoogleuser}>
            Sign in with Google Popup
        </button>
    </div>
 )   
}

export default SignIn