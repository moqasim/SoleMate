import React from "react";

function About(props) {
  return (
    <div>
      <div className="aboutUs"> about us</div>
      <div>
        <p className="aboutUs-Div">
          established in new york city, solemate is revolutionizing sneaker
          retail as the only consignment store for rare shoes. carrying the
          rarest exclusives and collectible sneakers, consignment has evolved
          from a one-stop sneaker destination, to a cultural hub for sneaker
          enthusiasts and novices alike. With three prime locations in new york
          city, dubai and tokyo, solemate remains the premier source for
          authentic, rare sneakers.
        </p>
      </div>

      <div className="aboutImg">
        <img
          src="https://i.pinimg.com/originals/fe/04/52/fe04520f0435b97accd350695bfb240c.jpg"
          alt="img"
        />
      </div>
      <div className="thankYou">thank you for your support!</div>
    </div>
  );
}

export default About;
