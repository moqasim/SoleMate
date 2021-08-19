import React from 'react';
import { Route, useState } from "react-router-dom";

function Home(props) {
   console.log(props)
    return (
        <div>
            

           { props.shoes ? <h1 className="homeHeader"> {props.shoes[7].title} </h1>  : null }
           { props.shoes ? <img className="imgHome" src={props.shoes[7].media.imageUrl} alt={props.shoes.title}/>  : null }
            <button className="btnHome"> buy now</button> 
           
           
            
            

           
        </div>
    );
}

export default Home;