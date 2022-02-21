import './Main-picture.css';
import bannerPicture from'../img/homepage_image.jpg';
import React from 'react';

function Banner() {
  return (
  
   <div className="banner-container">

     <img src= {bannerPicture} alt= "food"></img>
   </div>
  
  )
}

export default Banner;