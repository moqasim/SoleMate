import React from "react";

function Jordan({ shoes, addToCart, cart, name }) {
  if (!shoes) {
    return <h4>loading...</h4>;
  } else {
    return (
      <div>
        <h1 className="jordan-font">J O R D A N</h1>
        {shoes
          .filter((shoe) => shoe.brand === name)
          .map((filteredShoe) => {
            return (
              <div className="new-release-div">
                <img
                  className="shoe-div"
                  src={filteredShoe.media.imageUrl}
                  alt="img"
                />

                <div className="size-div">
                  <label for="size">size</label>
                  <select id="size" name="size">
                    <option value="8">8</option>

                    <option value="9">9</option>

                    <option value="10">10</option>
                  </select>
                  <p className="shoe-font">{filteredShoe.title}</p>
                  <button
                    className="buy-btn"
                    onClick={() => addToCart(filteredShoe.id)}
                  >
                    ${filteredShoe.retailPrice} <br /> Add to cart
                  </button>
                </div>
              </div>
            );
          })}
      </div>
    );
  }
}

export default Jordan;
