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

function App() {
  const [shoes, setShoes] = useState();

  useEffect(() => {
    getShoes();
  }, []);

  function getShoes() {
    const url = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=30";

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

      <Route exact path="/search" render={Search} />

      <Route exact path="/terms" render={Terms} />

      <Footer />
    </div>
  );
}

export default App;
