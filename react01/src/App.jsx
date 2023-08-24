




import './App.css'
import TwoNumbers from './TwoNumbers';
import GuessNumber from './GuessNumber';
import CompareStateVariable from './CompareStateVariable';
import CompareInputNumber from './CompareInputNumber';

  

const pizzaData = [
  {
    name:'capriciosa',
    ingredients:'champi with chesse',
    price: 100,
    photoName:'pizza.png',

  },
  {
    name:'kebab',
    ingredients:'kebab with tamato',
    price:120,
    photoName:'kebab.png',

  },
]

function App() {
  

  return (
    <>
   
    
    
    <TwoNumbers/>
    <br/>
    <br/>

    <GuessNumber/>
    <CompareStateVariable/>
    <CompareInputNumber/>
   
    <Menu/>
    

  
   
    
  
    
    </>
  )
}

const Menu =()=>{
  return (
    <>
    <main>
      <h2>our menu</h2>
      <Pizza
       name= ' capricciosa' ingredients='tomato,mozarella, and cheese' photoName='pizzas/kebab.png' price={98}
      />
      <Pizza
       name= ' italiana' ingredients='tomato,mozarlla,sallad and cheese' photoName='pizzas/kebab.png' price={95}
      />
      <Pizza
       name= ' chicken' ingredients='tomato,curry,chicken and cheese' photoName='pizzas/kyklingPizza.jpg' price={90}
      />
      <Pizza
       name= ' salami' ingredients='tomato,curry,salami and cheese' photoName='pizzas/pizaasalami.jpg' price={100}
      />
    </main>
    </>
  )
}

const Pizza = (props) => {
  console.log(props)
  return (
    <>
    <div className='pizza'>
    <img src= {props.photoName} alt={props.name}/>
    <h3> {props.ingredients}</h3> 
    <p><h2>{props.name} pris:{props.price + 5}</h2>
   </p>
   </div>
    
    </>
  )
}





export default App
