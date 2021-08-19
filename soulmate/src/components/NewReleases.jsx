import React from 'react';
import { useState, useEffect } from 'react-router-dom'

function NewReleases(shoes) {
    if (shoes){
        console.log('hello',shoes)
        return <h2>no images found</h2>
    }
  
    return (
        <div className="gallery">
            {/* {shoes.map(item => (
                <div key={item.title}>
                    <img src={item.shoes.media.imageUrl} alt={item.title} />
                    </div>
            ))} */}
            
        </div>
    );
}

export default NewReleases;