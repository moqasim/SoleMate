import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NewReleases from './components/NewReleases';
import About from './components/About';
import Search from './components/Search';
import Nav from './Nav';
import { useEffect, useState } from 'react';
import Footer from './Footer/Footer';


function App() {

  const [shoes, setShoes] = useState()
    

  useEffect(() => {
    getShoes()
  }, [])


function getShoes () {

const url = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=30"

fetch(url, {
    "method": "GET",
    "headers": {
        "x-rapidapi-key": "1cd96b09ecmsh12eaaf48c14b347p118ec2jsnc93858b4cb29",
        "x-rapidapi-host": "v1-sneakers.p.rapidapi.com"
    }
})
.then(response => response.json())
.then(response => {
  setShoes(response.results)
console.log(response)
})
.catch(console.error)
}




    return (
    <div className="App">
      <div><h1 className="solemate">solemate</h1></div>
      <div className="Header">
      <Nav />
      
     

      <Route exact path="/" render={() => <Home  shoes={shoes}/>} />

      <Route exact path="/about" render={About} />

      <Route exact path="/new-releases" render={NewReleases} shoes={shoes}/>

     <Route exact path="/search" render={Search} />

  
     </div>

     <div >
     <Footer />
     </div>


    </div>

  );
}


export default App;
