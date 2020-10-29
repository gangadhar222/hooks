import React, { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="row" style={{maxWidth:800,margin:'auto'}}>
      <h1 className="col-12 text-center">{counter}</h1>
      <button onClick={()=>setCounter(counter+1)} className="btn btn-danger col-6">Increment</button>
      <button onClick={()=>setCounter(counter-1)} className="btn btn-success col-6">Decrement</button>
    </div>
  );
}
