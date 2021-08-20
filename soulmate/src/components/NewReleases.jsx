import React from "react";

function NewReleases({ shoes }) {
  if (!shoes) {
    return <h2>sorry</h2>;
  } else {
    return shoes.map((shoe) => {
      return (
        <div className="shoe-div">
          <img className="shoe-img" src={shoe.media.imageUrl} alt="" />
        </div>
      );
    });
  }
}

export default NewReleases;
