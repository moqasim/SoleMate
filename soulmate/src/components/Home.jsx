import React from "react";
import { Link } from "react-router-dom";

function Home({ shoes, Logout }) {
  const randomNum = Math.floor(Math.random() * 50);
  console.log(shoes);

  return (
    <div className="home-div">
      {shoes ? (
        <h1 className="homeHeader"> {shoes[randomNum].title} </h1>
      ) : null}

      {shoes ? (
        <img
          className="imgHome"
          src={shoes[randomNum].media.imageUrl}
          alt={shoes[randomNum].title}
        />
      ) : null}
      <button className="buy-btn"> buy now</button>
    </div>
  );
}

export default Home;
