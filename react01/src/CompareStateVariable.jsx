import { useEffect, useState } from "react";


const CompareStateVariable = () => {
  const [variable1,setVariable1]= useState('')
  const [variable2,setVariable2]= useState('')
  const [isEqual,setIsEqual]= useState(false)

  useEffect(()=>{
    setIsEqual(variable1 >= variable2)
  },[variable1,variable2])
  return (
  <>
    <div>CompareStateVariable</div>
    <p>variable1: {variable1}</p>
    <p>variable2: {variable2}</p>
    <p>are they equal: {isEqual ? 'yes' : 'no'}</p>
    <button onClick={()=>setVariable1('15')}>set variable 1 to Hello </button>
    <button onClick={()=>setVariable2('10')}>set variable 2 to world </button>

    
    </>
  )
}

export default CompareStateVariable