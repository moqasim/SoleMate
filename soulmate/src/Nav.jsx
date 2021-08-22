import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <nav>
      <div className="header">
        <div>
          <Link className="home" to="/">
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
      </div>
    </nav>
  );
}

export default Nav;
