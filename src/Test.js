import React,{useState} from 'react'

const Test = () => {
const [counter, setcounter] = useState(0)


  return (
    <div>
        <button onClick={()=>setcounter(counter+1)}>{counter}</button>
    </div>
  )
}

export default Test