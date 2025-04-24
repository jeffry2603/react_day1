

//our first component
//component reusable piece of ui

import Header from "./components/Header";
import Description from "./components/Description";




//Base component
function App() {

   let a = 51;
   let b = 47;

   let c = a + b - b / a

// let birthdate = new Date('1990-04-23')

// let today = new Date();

// let age = today.getFullYear() - birthdate.getFullYear()



   return (
   <>
<div>
the answer for the equation of {a} and {b} is {c} 
 </div>
   <Header/>

   <Header/>

   <Header/>

   <Header/>
   
<Description />

<Description />

<Description />




</>
   )

  }

export default App;

























































