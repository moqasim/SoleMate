import "./App.css";
import { Route } from "react-router-dom";
import Home from "./components/Home";
import NewReleases from "./components/NewReleases";
import About from "./components/About";
import Search from "./components/Search";
import Nav from "./Nav";
import { useEffect, useState } from "react";
import Footer from "./Footer/Footer";
import Terms from "./Footer/Terms";
import ContactUs from "./Footer/ContactUs";
import Privacy from "./Footer/Privacy";
import Nike from "./components/shoes/Nike";
import Adidas from "./components/shoes/Adidas";
import Jordan from "./components/shoes/Jordan";

function App() {
  const [shoes, setShoes] = useState();
  const [cart, setCart] = useState([]);

  const addToCart = (id) => {
    console.log(id);
    setCart([...cart, id]);
  };

  useEffect(() => {
    getShoes();
  }, []);

  function getShoes() {
    const url = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=100";

    fetch(url, {
      method: "GET",
      headers: {
        "x-rapidapi-key": "1cd96b09ecmsh12eaaf48c14b347p118ec2jsnc93858b4cb29",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        setShoes(response.results);
      });
  }

  return (
    <div className="App">
      <div>
        <h1 className="solemate">solemate</h1>
      </div>
      <div className="Header">
        <Nav />
      </div>
      <Route exact path="/" render={() => <Home shoes={shoes} />} />

      <Route exact path="/about" render={About} />

      <div className="new-release-div">
        <Route
          exact
          path="/new-releases"
          render={() => <NewReleases shoes={shoes} />}
        />
      </div>
      <Route
        exact
        path="/new-releases/nike"
        render={() => (
          <Nike shoes={shoes} cart={cart} addToCart={addToCart} name={"Nike"} />
        )}
      />
      <Route
        exact
        path="/new-releases/jordan"
        render={() => <Jordan shoes={shoes} name={"Jordan"} />}
      />
      <Route
        exact
        path="/new-releases/adidas"
        render={() => <Adidas shoes={shoes} name={"adidas"} />}
      />

      <Route exact path="/search" render={Search} />

      <Route exact path="/terms" render={Terms} />
      <Route exact path="/contact-us" render={ContactUs} />
      <Route exact path="/privacy" render={Privacy} />

      <Footer />
    </div>
  );
}

export default App;
