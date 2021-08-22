import React from "react";

function Home({ shoes }) {
  const randomNum = Math.floor(Math.random() * 50);
  console.log(shoes);

  return (
    <div>
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
