import React,{useState} from 'react';
import MouseContainer from './MouseContainer'

export default function UseEffectThree() {
    const [display,setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle</button>
            {
                display && <MouseContainer />
            }
        </div>
    )
}
