import agepic from '../img/age.png';
import heightpic from '../img/height.png';
import weightpic from '../img/weight.png';
import React, { useState } from "react";
import './BMR-calculator.css';
import female from '../img/female.png';
import male from '../img/mann.png';
import GoalCalculator from './Goal-calculator';


const Calk = (props) => {
  const [age, setAge] = useState(0 );
  const [weight, setWeight] = useState(0 );
  const [height, setHeight] = useState( 0);
  const [gender, setGender] = useState('');
  const [BMR, setBMR] = useState(0);
  const [allData, setAllData] = useState({});
  const [genderError, setGenderError] = useState ('');
  const [ageError, setAgeError] = useState ('');
  const [heightError, setHeightError] = useState ('');
  const [weightError, setWeightError] = useState ('');

  const sendAge = (event) => {
    setAge(event.target.value)
  }

  const sendWeight = (event) => {
    setWeight(event.target.value)
  }

  const sendHeight = (event) => {
    setHeight(event.target.value)
  }

  const sendGender = (event) => {
    setGender(event.target.value)
  }

  const dataFromInputs = (event) => {
    event.preventDefault();

    const dataInput = {
      age: age,
      BMR: BMR,
      gender: gender,
      height:height,
      weight: weight,
      ageError: ageError,

    }
   
    setAllData(dataInput);
    props.sendAlldata(dataInput);

  }

  localStorage.setItem("currentMenu", JSON.stringify(allData));

 

  //Calculate BMR

    const calculate = ()=>{
      let count = 0;
      console.log('Halooo');

      if (gender === "Male") {
        count = (
          10 * weight +
          6.25 * height -
          5 * age +
          5)
      }
        
       else if (gender === "Female") {
        count = (
          10 * weight +
          6.25 * height -
          5 * age -
          161)
       }
       setBMR(count)
      }
      console.log(BMR)

      let genderErrors = '';
     let ageErrors = '';
     let heightErrors = '';
     let weightErrors = '';

  function checkForm (e) {
    
   
      if (gender && age && height && weight) calculate();
   
      if (gender.length === 0) genderErrors ="Gender required."; 
      if (age <= 0 ) ageErrors="Age required.";
      if (height <= 0 ) heightErrors= "Height required.";
      if (weight <= 0 ) weightErrors="Weight required.";

      setGenderError(genderErrors)
      setAgeError(ageErrors)
      setHeightError(heightErrors)
      setWeightError(weightErrors)
    
    }
  
   


  return (
    <>
    <template>
      <div className="calculator">
      <div className="cal-body">
       <form onSubmit= {dataFromInputs}>
         <div className="header">
         {/*--RADIO 1--*/}
    
  
          <input name="gender" type="radio" value={"Female"} onChange = {sendGender} />

         <img src= {female} className="picture" alt='female' />

         {/*--RADIO 2--*/}

        <img src= {male} className="picture" alt='male'  />

       <input name="gender" type="radio" value={"Male"} onChange = {sendGender} />
       </div>
       <p>{genderError}</p>



      { /*--weight, height,age--*/}


      <div className="headerForms">
        <div className="windows">
          <div className='input'>
          <img src={agepic} className="picture" alt="age" />
          <input className="input" value= {age} type="number" min="0" name="age" onChange = {sendAge} ></input>
          <p>{ageError}</p>
          </div>
          
          <div className='input'>
          <img src={weightpic}  className="picture" alt='weight' />
          <input className="input" number="weight" type="number" min="0" value={weight} onChange = {sendWeight}  />
          <p>{weightError}</p>
          </div>

          <div className='input'>
          <img src={heightpic} className="picture" alt='height'  />
          <input className="input" number="height" type="number" min="0" id="height" name="height" value={height} onChange = {sendHeight} />
          <p>{heightError}</p>
          </div>
        </div>
        </div>
        
        {/* submit*/}

        <div className="submit">
            <button className="button" type='submit'onClick={checkForm} >
              Calculate BMR
            </button>
          </div>
         </form>
         {/*calculate BMR */}
          <div className="your-bmr">
          <p className="ybmr">
             Your Basal Metabolic Rate (BMR) is: {BMR}
              kcal/day
          </p>
         </div>
        </div>

        <GoalCalculator data ={allData}></GoalCalculator>
      </div>
      
    </template>

    </>
  )
}
export default Calk
