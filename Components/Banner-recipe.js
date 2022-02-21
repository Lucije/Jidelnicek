import recipePicture from '../img/recipe_image.jpg';
import React from 'react';


function BannerRecipe() {
  return (
  
   <div className="banner-container">

     <img src= {recipePicture} alt= "food"></img>
   </div>
  
  )
}

export default BannerRecipe;