import { useState } from "react";


const GuessNumber = () => {
  const [values,setValues]= useState({num1: 0,num2:0});
  const [input,setInput ]= useState('calculate')
  const [result,setResult]= useState('output')

  const generateNumbers = ()=>{
    const num1 = Math.floor(Math.random()*10)
    const num2 = Math.floor(Math.random()*5)
    setValues({num1,num2})
    setResult('')
  }
  const adivinaNumero =()=>{
    const suma= values.num1 + values.num2;
    if(parseInt(input) === suma){
      setResult('bra gissat!')

    }else{
      setResult('försök igen!')
    }
  }
  return (
   <>
   <h1>Gissa mitt nummer</h1>
   <p>num1: {values.num1}</p>
   <p>num1: {values.num2}</p>
   <button onClick={generateNumbers}>beräkna här!</button>
   <br/>
   
   <label>skriv nummer du gissar:
    <input type="number"value={input}
    onChange={(e)=>setInput(e.target.value)}/>
   </label>
   <br/>
   <br/>
   <button onClick={adivinaNumero}>Kontrollera nummer</button>
   <br/>
   
   <p> svar:{result}</p>
   </>
  )
}

export default GuessNumber