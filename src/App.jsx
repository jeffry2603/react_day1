

//our first component
//component reusable piece of ui

import Header from "./components/Header";
import Description from "./components/Description";




//Base component
function App() {

  let a=50;
  let b=45;

   // let c = a + b - b / a

// let birthdate = new Date('1990-04-23')

// let today = new Date();

// let age = today.getFullYear() - birthdate.getFullYear()



   return (
   <>


   <Header/>

<Description   a = {45} b={55} c={a+b*b/a}  />




</>
   )

  }

export default App;

























































