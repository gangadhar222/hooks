import React,{useEffect,useState} from 'react'

export default function MouseContainer() {
    const [x,setX] = useState(0)
    const [y,setY] = useState(0)


    const logMousePosition = (e)=>{
        console.log('mouse event')
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log('Use Effect in Mouse Container')
        window.addEventListener('mousemove',logMousePosition)
        return ()=>{
            window.removeEventListener('mousemove',logMousePosition)
        }
    },[])
    return (
        <div>
            Coordinates-{x}, {y}
        </div>
    )
}
