import React,{useEffect} from 'react';
import Banner from '../Components/Banner'
import HomepageInfo from '../Components/Homepage-info';
import Calculator from '../Components/BMR-calculator';
import HomepageGenerateMenu from '../Components/HomepageGenerateMenu';



const Home = (props) => {

const dataFromBMR = (data) => {
  console.log(data);
  const dataFromBMR = data;
  console.log(dataFromBMR);
  props.dataHome(dataFromBMR)

}

  return (
  <>
  <Banner/>
  <HomepageInfo/>
  <Calculator sendAlldata ={dataFromBMR}/>
  <HomepageGenerateMenu></HomepageGenerateMenu>
  </>
  )
}

export default Home