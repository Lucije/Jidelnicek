import './Homepage-info.css';
import one from '../img/one.png';
import two from '../img/two.png';
import three from '../img/three.png';
import React from 'react'

function HomepageInfo() {
  return (
   
    <div className ="info">
    
    <div className="info-text">
      <h1>Meal planning - no rocket science</h1>
      <p>Meal planning. It is something that’s always on your to-do list but somehow never actually happens? Or is it something you dread because it seems time-consuming and boring? Yes, meal planning takes a great deal of dedication, commitment, and work. The basic mechanics of meal planning are fairly straightforward, but where to take all the recipes ideas? The good news: there is a better and much simplier way. Leave it to us!</p>
      <h1>How much energy your body actually needs</h1>
      <p>
        To maintain a constant weight, our bodies have to burn the same amount of energy as they consume. What sounds easy in theory can be challenging in practice; people who eat more generally also have to do more exercise, otherwise they can start to gain weight. Energy requirements vary with age, gender, body size and activity levels. This Energy Requirements Calculator estimates your daily energy requirements for good health based on what your body needs for
        breathing, circulating blood, digesting food (Basal Metabolic Rate - BMR) and physical activity.
      </p>
      <h3>It has never been easier. Create your weekly meal plan in 3 steps:</h3>
    </div>
    <div className="info-cards">
      <div className="step">
        <div className="number">
          <img src={one} alt="one" />
        </div>
        <p className="card-text">
          Enter your
          gender,
          age,
          height and
          body weight, and let's calculate your BMR.
        </p>
      </div>

      <div className="step">
        <div className="number">
          <img src={two} alt="two" />
        </div>
        <p
          className="card-text"
        >Calculate your daily calorie requirement including your activity level factor and goal.</p>
      </div>

      <div className="step">
        <div className="number">
          <img src= {three} alt="three" />
        </div>
        <p
          className="card-text"
        >Let's generate your weekly meal plan (recipes for breakfast, lunch and dinner).</p>
      </div>
    </div>
  </div>
  )
  
}

export default HomepageInfo;