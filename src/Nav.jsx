import React from "react";
import { Link } from "react-router-dom";
import shoppingcart from "./shoppingcart.png";

function Nav({ Logout }) {
  return (
    <nav>
      <div className="header">
        <div>
          <Link className="home" to="/home">
            home
          </Link>
        </div>
        <div>
          <Link className="about" to="/about">
            about
          </Link>
        </div>
        <div>
          <Link className="new-releases" to="/new-releases">
            new releases
          </Link>
        </div>
        <div className="login-div">
          <Link className="home" to="/">
            <button className="logoutbtn" onClick={Logout}>
              logout
            </button>
          </Link>
        </div>
        <div className="cartlogoDiv">
          <button className="cartLogobtn">
            <Link to="/cart">
              <img className="cartLogo" src={shoppingcart} alt="cart" />
            </Link>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
