import React, { useEffect } from "react";
import Home from "./routes/home/home";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/navigation/navigation";
import Authentication from "./routes/authentication/authentication";
import Shop from "./routes/shop/shop";
import Checkout from "./routes/checkout/checkout";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./store/user-reducer/user.action";
import { fetchCategoryStart } from "./store/category-reducer/category-action";

const App = () => {
  const disptach = useDispatch();
  useEffect(() => {
    const unsubscribe = onAuthStateChangedListener((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      console.log(user);
      disptach(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    disptach(fetchCategoryStart());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index={true} element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};
export default App;
