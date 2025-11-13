import { useState } from 'react'
import './Ludo.css'

export default function LudoGame(){
    let [move,setMove] = useState({blue:0,red:0,green:0,yellow:0});
    let incCount = ()=>{
        
    }
    return(
        <> 
        <div className='board'>
            <p>Blue moves = {move.blue} </p>
            <button>+1</button>
            <p>yellow moves = {move.yellow}</p>
            <button>+1</button>
            <p>red moves = {move.red}</p>
            <button>+1</button>
            <p>green moves = {move.green}</p>
            <button>+1</button>
        </div>
        </>
    )
}