import { useState } from "react";


const CompareInputNumber = () => {
  const [num1,setNum1]= useState(0)
  const [num2,setNum2]= useState(0)
  const [comparisonResult,setComparisonResult]=useState('')
  
  

  const handleCompare = ()=>{
    if(num1 > num2){
      setComparisonResult(`${num1} is greater than ${num2}`)
    }else if(`${num1 < num2}`){
      setComparisonResult(`${num1} is less than ${num2}`)
    }
    
    else {
      setComparisonResult(`${num1} is equal than ${num2}`)
    }
    setNum1('')
    setNum2('')
  }
  
  return (
    <>
    <div>CompareInputNumber</div>
    <label>
      enter number 1
      <input  type="number" value={num1}
      onChange={(e)=> setNum1(Number(e.target.value))}
      />
    </label>
    <br/>
    <label>
      enter number 2
      <input  type="number" value={num2}
      onChange={(e)=> setNum2(Number(e.target.value))}
      />
    </label>
    <br/>
    <button onClick={handleCompare}>Compare numbers!</button>
    <p> {comparisonResult}</p>

    </>
  )
}

export default CompareInputNumber