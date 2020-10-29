// we will see here how to set state using previous  state value

import React,{useState} from 'react'

export default function UseStateTwo() {
    const initState = 0
    const [counter,setCounter] = useState(initState)
    const incrementByFive = ()=>{
        for(let i=0;i<5;i++){
            setCounter(prevCount=>prevCount+1)
        }
    }
    return (
        <div className="row" style={{maxWidth:800,margin:'auto'}}>
        <h1 className="col-12 text-center">{counter}</h1>
        <button onClick={()=>setCounter(prevCount=>prevCount+1)} className="btn btn-danger col-4">Increment</button>
        <button onClick={()=>setCounter(prevCount=>prevCount-1)} className="btn btn-success col-4">Decrement</button>
        <button onClick={incrementByFive} className="btn btn-info col-4">Increment By Five</button>
      </div>
    )
}
