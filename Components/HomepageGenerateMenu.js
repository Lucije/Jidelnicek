import React from 'react';
import './HomepageGenerateMenu.css';


const HomepageGenerateMenu = () => {


  return (
<div className='container'>
    <p>
    <strong
      >You are one step away from having your tasty meal plan. If this meal
      plan doesn't seem to suit you, just easily generate a new one. Let's
      see what's on the menu!</strong>
    </p>
    <div class="link" align="center">
    
      <button class="button" onClick="window.location.href='./MealPlanner'">Generate menu</button>
   </div>

  <div class="disclaimer">
  <p>
    *Disclaimer: The results given by our BMR calculator should be used only
    as a guide and should not replace medical advice. Please bear in mind
    that, when interpreting the results of this BMR calculator, other
    factors such as your lean body mass should be considered. You should
    always speak to a qualified Doctor or health professional for advice and
    guidance before making any dramatic changes to your lifestyle.
  </p>
</div>
</div>
  )
}

export default HomepageGenerateMenu