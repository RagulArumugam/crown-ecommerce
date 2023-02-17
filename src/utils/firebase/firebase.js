import { initializeApp } from "firebase/app";
import { getAuth , signInWithRedirect , signInWithPopup , GoogleAuthProvider } from "firebase/auth"
import { getFirestore , doc , getDoc , setDoc } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDPsto2Rv2laxLU0_aAWmKDJnYheZIktRU",
    authDomain: "crown-clothing-db-8913a.firebaseapp.com",
    projectId: "crown-clothing-db-8913a",
    storageBucket: "crown-clothing-db-8913a.appspot.com",
    messagingSenderId: "123404694686",
    appId: "1:123404694686:web:fd52bb661ea501200df78f"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();
export const signInwithGooglePopup = () => signInWithPopup(auth,provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
    // to get the user referense
    const userDocRef = doc(db, "users" , userAuth.uid);
    //to check whether the user is in the document
    const userSnapshot = await getDoc(userDocRef);
    //if the user data dosnt exist create a new
    if(!userSnapshot.exists()) {
        const { displayName , email } = userAuth;
        const createdAt = new Date();

        try{
            await setDoc(userDocRef , { displayName , email , createdAt })
        } catch(err) {
            console.log("error creating the user" ,err);
        }
    }

    return userDocRef; 
}