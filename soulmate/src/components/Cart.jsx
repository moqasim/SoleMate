import React from "react";

function Cart(props) {
  return (
    <div className="cartStyle">
      <div className="cartDiv">
        <p>
          total:<div className="totalDiv">$0.00</div>
        </p>

        <button className="cartbtn">checkout</button>
      </div>
    </div>
  );
}

export default Cart;
