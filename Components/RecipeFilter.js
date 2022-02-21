import React,{useState} from 'react';
import './RecipeFilter.css';


const RecipeFilter = (props) => {
  const [mealType, setMealType] = useState('')

  const sendMealType =  (event) => {
    
    setMealType(event.target.value);
    props.dataMealType(mealType)

  }

  console.log(mealType)


  return(
    <>
    <div className='dropDown-container'>
    <form onChange={sendMealType}>
  <label >Type of meal:</label>
  <select>
    <option value= "Breakfast">Main dish</option>
    <option value="Main dish">Breakfast</option>
  </select>
 
</form>
</div>
</>

  )
}

export default RecipeFilter