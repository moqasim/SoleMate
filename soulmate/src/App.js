import logo from './logo.svg';
import './App.css';
import { Route } from 'react-router-dom';
import Home from './components/Home';
import NewReleases from './components/NewReleases';
import About from './components/About';
import Search from './components/Search';
import Nav from './Nav';

function App() {


// function newReleases () {
//   const url = "https://v1-sneakers.p.rapidapi.com/v1/sneakers?limit=15" 

//   fetch(url)
//       .then(response => response.json())
//       .then(response => {
        
//       })
//       .catch(console.error);

// }
  
  
  
  return (
    <div className="App">
      <div className="solemate"><h1>solemate</h1></div>
      <Nav />

      

     
      <Route exact path="/" render={Home} />


      <Route exact path="/about" render={About} /> 



      
      <Route exact path="/new-releases" render={NewReleases} />




      
      <Route exact path="/search" render={Search} />





    
    </div>
    
  );
}

export default App;
