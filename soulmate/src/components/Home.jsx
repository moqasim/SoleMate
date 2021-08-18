import React from 'react';
import { Route } from "react-router-dom";

function Home(props) {
    return (
        <div>
            this is my home page

            <h1>{props.shoes}</h1>

           
        </div>
    );
}

export default Home;