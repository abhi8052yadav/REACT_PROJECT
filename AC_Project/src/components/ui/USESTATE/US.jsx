import { useState } from "react";

function US(){
    let [count,setCount] = useState(0);

    let incCount = ()=> {
        setCount(count+1)
        console.log(count)
    }

    return (
        <>
         <h1>COUNT = {count}</h1>
         <button onClick={incCount}>click me</button>
        </>
    )
}

export default US