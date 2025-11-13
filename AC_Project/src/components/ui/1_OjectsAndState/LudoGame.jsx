import { useState } from 'react'
import './Ludo.css'

export default function LudoGame(){
    let [move,setMove] = useState({blue:0,red:0,green:0,yellow:0})

    let updateBlue = ()=>{
        move.blue += 1 
        console.log(move)
        setMove({...move})// in java objects and arrays address remains same always. if you are changing the keys of any object then it never updated.
        // so to see or rerender the ui we have to make a new copy of the object and pass again that's why we are going to use this spread funtion ...move . it makes a copy of new object and gives a new address and then we are passing it by making an object i.e. {...move} . 
        // you can directly use also by passing {...move,blue: move.blue+1}. 
    }
    return(
        <> 
        <div className='board'>
            <p>Blue moves = {move.blue} </p>
            <button style={{backgroundColor:"blue"}} onClick={updateBlue}>+1</button>
            <p>yellow moves = {move.yellow}</p>
            <button style={{backgroundColor:"yellow"}}>+1</button>
            <p>red moves = {move.red}</p>
            <button style={{backgroundColor:"red"}}>+1</button>
            <p>green moves = {move.green}</p>
            <button style={{backgroundColor:"green"}}>+1</button>
        </div>
        </>
    )
}