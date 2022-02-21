import React,{useEffect, useState} from 'react';
import './BCard.css'


const  BCard = (props) => {
  const [label, setLabel] = useState('');

  useEffect(() => {
    setLabel(props.label);
  }, [props.label]); // <- add the count variable here
  console.log(label)
  return (
    <div className='BCard-container'>
    <b-modal>
        <h4>{label}</h4>

        <h6>By:{label} </h6>
        <br />

        
        <br />
        <h6>Food allergies:</h6>
        <li v-for="(item, index) in this.infoModal.cautions" ></li>
        <h6>Calories: kcal</h6>
        <h6>
          Fat:
         
           g | Carbs:  g
        </h6>
        <h6>Ingredients:</h6>
        <li v-for="(item, index) in this.infoModal.ingredientLines" ></li>
        <b-button >Full recipe & Instructions</b-button>
      </b-modal>
      </div>
  );
}

export default BCard;