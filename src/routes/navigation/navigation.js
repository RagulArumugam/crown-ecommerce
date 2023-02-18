import React, { Fragment, useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import CartIcon from "../../components/cart-icon/cart-icon";
import { CartContext } from "../../context/cart.context";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import "./navigation.scss";

const Navigation = () => {
  //context
  const { openCart } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);
  const signOutHandler = async () => {
    try {
      await signOutUser();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrownLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="/auth">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          )}
          <CartIcon />
        </div>
        {openCart && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};
export default Navigation;
