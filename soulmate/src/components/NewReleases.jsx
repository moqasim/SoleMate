import React from "react";
import { Link } from "react-router-dom";
import nikelogo from "../nikelogo.png";
import jordanlogo from "../jordanlogo.png";
import adidaslogo from "../adidaslogo.png";
import newbalancelogo from "../newbalancelogo.png";
import pumalogo from "../pumalogo.png";

function NewReleases({ shoes }) {
  return (
    <div className="logos">
      <button className="nike-logo logo">
        <Link to="/new-releases/nike">
          <img src={nikelogo} alt="hello" />
        </Link>
      </button>
      <button className="jordan-logo logo">
        <Link to="/new-releases/jordan">
          <img src={jordanlogo} alt="hello" />
        </Link>
      </button>
      <button className="adidas-logo logo">
        <Link to="/new-releases/adidas">
          <img src={adidaslogo} alt="hello" />
        </Link>
      </button>
    </div>
  );
}

export default NewReleases;
