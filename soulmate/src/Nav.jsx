import React from "react";
import { Link } from "react-router-dom";

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
            <button onClick={Logout}>Logout</button>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
