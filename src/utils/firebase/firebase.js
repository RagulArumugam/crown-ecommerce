import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDPsto2Rv2laxLU0_aAWmKDJnYheZIktRU",
  authDomain: "crown-clothing-db-8913a.firebaseapp.com",
  projectId: "crown-clothing-db-8913a",
  storageBucket: "crown-clothing-db-8913a.appspot.com",
  messagingSenderId: "123404694686",
  appId: "1:123404694686:web:fd52bb661ea501200df78f",
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInwithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  // to get the user referense
  const userDocRef = doc(db, "users", userAuth.uid);
  //to check whether the user is in the document
  const userSnapshot = await getDoc(userDocRef);
  //if the user data dosnt exist create a new
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (err) {
      console.log("error creating the user", err);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async ({
  email,
  password,
}) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserWithEmailAndPassword = async ({ email, password }) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => {
  return await signOut();
};

// like a socket it keep on listening to the authentication activity
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
