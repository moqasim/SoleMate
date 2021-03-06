import React from "react";

function Nike({ shoes, addToCart, cart, name }) {
  console.log(shoes);
  if (!shoes) {
    return <h4>loading...</h4>;
  } else {
    return (
      <div>
        <h1 className="nike">NIKE</h1>
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

export default Nike;
