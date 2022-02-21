import React from 'react';
import './MealPlanner.css';
import makeData from './data.json';

const MealPlanner = (props) => {

  const allData=JSON.parse(localStorage.getItem("currentMenu"))
  const intake= allData.BMR;
  console.log(intake)
  let obj = [];
  let days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  const data = React.useMemo(() => makeData, [])

  const createMenu = ()=> {

  const recipes = Object.values(data).map(e => ({ ...e, caloriesPerPortion: e.calories / e.yield }));

 //vyfilturuje vsechny snidane do jedne promenne, snidane musi byt mezi 10% a 44% z celkoveho goalIntake
 const breakfasts = recipes.filter(recipe => recipe.mealType === "Breakfast").filter(recipe => recipe.caloriesPerPortion > 0.1 * intake && recipe.caloriesPerPortion < 0.44 * intake);

 //vzfiltruje vsechny obedy/vecere do jedne promenne
 const lunches = recipes.filter(recipe => recipe.mealType === "Main dish");

 //vybira nahodnou snidani
 const breakfastIndex = Math.floor(Math.random() * (breakfasts.length - 1));
 const breakfast = breakfasts[breakfastIndex];
 console.log(breakfast)

 //vybira nahodny obed nebo veceri
 const lunchIndex = Math.floor(Math.random() * (lunches.length - 1));
 const lunch = lunches[lunchIndex];
 console.log(lunch)

  // kaloricka hodnota bez vecere
  const caloriesWithoutDinner = breakfast.caloriesPerPortion + lunch.caloriesPerPortion;

  // kaloricka hodnota vecere nutna k doplneni goalIntake
  const missingCalories = intake - caloriesWithoutDinner;

  const lunchesCalories = lunches.map(e => e.caloriesPerPortion);

  //vybere kalorickou hodnotu vecere z promenne lunches, aby byla co nejblizsi k missingCalories hodnote, zjisti jeji index a tim i label receptu
  for (var i = 0, currentClosestNum = 10000, currentClosestIndex = null; i < lunchesCalories.length; i++) {
    if (Math.abs(lunchesCalories[i] - missingCalories) < currentClosestNum) {
      currentClosestNum = Math.abs(lunchesCalories[i] - missingCalories);
      currentClosestIndex = i;
    }
  }

  // recept pro veceri
  const dinner = lunches[currentClosestIndex];
  const total = caloriesWithoutDinner + dinner.caloriesPerPortion;

  return { lunch, breakfast, dinner };

}

for (let i = 0; i < 7; i++) {
  let meals = createMenu(intake);
  let item = {
    day: days[i],
    breakfast: meals.breakfast,
    lunch: meals.lunch,
    dinner: meals.dinner,
  };

  obj.push(item);
}



  

  return (
    
    <div className="mealPlann-container">
      
        {obj.map((user) => (
        <div className='day'>
          <h1>{user.day}</h1>
        <div className='meals'>
        <div className='breakfast'>
            <h3>{user.breakfast.mealType}</h3>
            <h6>{user.breakfast.label}</h6>
            <div className='image'>
            <img src={user.breakfast.image} alt="foto"></img>
            </div>
            <p>Calories: {Math.floor(user.breakfast.calories)} kcal</p>
            <p>Calories per portion: {Math.floor(user.breakfast.caloriesPerPortion)} kcal</p>
            <p>Number of servings: {user.breakfast.yield}</p>
           <ul class="ingredients"> <b> Ingredients:</b>
            {user.breakfast.ingredientLines.map(function(ingredient,index){
            return <li key={index}>{ingredient}</li>
          })}
          
          </ul>
        
          </div>
        
        <div className='lunch'>
          <h3>Lunch</h3>
          <h6>{user.lunch.label}</h6>
          <div className='image'>
          <img src={user.lunch.image} alt="foto"></img>
          </div>
          <p>Calories: {Math.floor(user.lunch.calories)} kcal</p>
          <p>Calories per portion: {Math.floor(user.lunch.caloriesPerPortion)} kcal</p>
          <p>Number of servings: {user.lunch.yield}</p>
         <ul class="ingredients"><b> Ingredients:</b>
          {user.lunch.ingredientLines.map(function(ingredient,index){
          return <li key={index}>{ingredient}</li>
          })}
       
        </ul>
      
        </div>


        <div className='dinner'>
           
            <h3 className='brm'>Dinner</h3>
            <h6>{user.dinner.label}</h6>
            <div className='image'>
            <img src={user.dinner.image} alt="foto"></img>
            </div>
            <p>Calories: {Math.floor(user.dinner.calories)} kcal</p>
            <p>Calories per portion: {Math.floor(user.dinner.caloriesPerPortion)} kcal</p>
            <p>Number of servings: {user.dinner.yield}</p>
           <ul class="ingredients"><b> Ingredients:</b>
            {user.dinner.ingredientLines.map(function(ingredient,index){
            return <li key={index}>{ingredient}</li> })}
            
          </ul>
          


        </div>
        </div>
        </div>        ))}
    </div>
  
  )
  
}

export default MealPlanner