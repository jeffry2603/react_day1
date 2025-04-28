

//our first component
//component reusable piece of ui

import Header from "./components/Header";
import Description from "./components/Description";




//Base component
function App() {

  

   // let c = a + b - b / a

// let birthdate = new Date('1990-04-23')

// let today = new Date();

// let age = today.getFullYear() - birthdate.getFullYear()

//create a function to get the values from child component

function get (a,b){
   console.log(a,b);
}

//pass the function to the child component

   return (
   <>


   <Header/>

<Description   get={get}  />




</>
   )

  }

export default App;

























































