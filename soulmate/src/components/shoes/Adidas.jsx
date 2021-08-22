import React from "react";

function Adidas({ shoes, addToCart, cart, name }) {
  if (!shoes) {
    return <h4>loading...</h4>;
  } else {
    return (
      <div>
        <h1>adidas</h1>
        {shoes
          .filter((shoe) => shoe.brand === name)
          .map((filteredShoe) => {
            return (
              <div>
                <img src={filteredShoe.media.imageUrl} alt="img" />
                <button onClick={() => addToCart(filteredShoe.id)}>
                  Add to cart
                </button>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Adidas;
