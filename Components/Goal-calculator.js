import React, {useState} from 'react';
import './Goal-calculator.css';

const GoalCalculator = (props) => {
  const [activity, setActivity] = useState(0);
  const [goal, setGoal] = useState('');
  const [intake, setIntake] = useState(0)

  const changeActivity = (event) => {
    setActivity(event.target.value)
  }

  const changeGoal = (event) => {
    setGoal(event.target.value)
    
  }

  const submitForm = (event) => {
    event.preventDefault();
    calkIntake()
  }

  const calkIntake = () => {
    let intakeGoal = 0;
      if (goal === "Maintain") {
        intakeGoal = (props.data.BMR * activity).toFixed(0);
      } else if (goal === "Lose") {
        intakeGoal = (props.data.BMR * activity - 400).toFixed(0);
      } else if (goal === "Gain") {
        intakeGoal = (props.data.BMR * activity + 500).toFixed(0);
      }
    
      setIntake(intakeGoal)

  }

  return (
    <div className='SecondInputs'>
      <div className='inputs2'>
     
        <div class="left">
          <h5 class="h7">How active are you?</h5>
          <label for="radio1">
            <input
         
              type="radio"
              class="radio_item"
              value="1.2"
              name="activity"
              id="radio1"
              onChange={changeActivity}
            />
            Little or no exercise
          </label>

          <label for="radio2">
            <input
         
              type="radio"
              class="radio_item"
              value="1.375"
              name="activity"
              id="radio2"
              onChange={changeActivity}
            />
            Light exercise (1-2 days/wk)
          </label>

          <label for="radio3">
            <input
       
              type="radio"
              class="radio_item"
              value="1.55"
              name="activity"
              id="radio3"
              onChange={changeActivity}
            />
            Moderate exercise (3-5 days/wk)
          </label>

          <label for="radio4">
            <input
              type="radio"
              class="radio_item"
              value="1.725"
              name="activity"
              id="radio4"
              onChange={changeActivity}
            />
            Very active (6-7 days/wk)
          </label>

          <label for="radio5">
            <input
              type="radio"
              class="radio_item"
              value="1.9"
              name="activity"
              id="radio5"
              onChange={changeActivity}
            />
            Extra active (very active or/and physical job):
          </label>
        </div>

      <div class="right">
          <h5 class="h7">What is your long-term body goal?</h5>

          <label for="radio6">
            <input
              type="radio"
              class="radio_item"
              value="Maintain"
              name="goal"
              id="radio6"
              onChange={changeGoal}
            />
            Maintain current weight
          </label>

          <label for="radio7">
            <input
            
              type="radio"
              class="radio_item"
              value="Lose"
              name="goal"
              id="radio7"
              onChange={changeGoal}
            />
            Lose weight
          </label>

          <label for="radio8">
            <input
              
              type="radio"
              class="radio_item"
              value="Gain"
              name="goal"
              id="radio8"
              onChange={changeGoal}
            />
            Gain weight
          </label>
        
      </div>
      </div>

      <div class="exeFooter">
        <div class="exeform">
        <form onSubmit={submitForm}>
          <button onClick = {calkIntake} type='submit'class="button">Calculate</button>
        </form>
        </div>
        <p class="ybmr">
          Energy intake to reach your body goal is:{intake} kcal/day.
        </p>
      </div>
      
      
    </div>
  
  
       
  );
}

export default GoalCalculator