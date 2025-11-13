import { useState } from "react"
import "./ToDo.css"
import List from "./List.jsx"

export default function ToDo(){
    let [arr,setArr] = useState([])
    let [task,setTask] = useState("")

    let updatetask = (e)=>{
        setTask(e.target.value)
    }

    let updateArr = ()=>{
        arr.push(task)
        setArr([...arr])
        setTask("")
    }
    return(
        <>
            <div className="box">
                <div className="inputbox">
                     <label htmlFor="takingIput">type you tasks here:</label>
                    <div className="input">
                        <input className="taskinput" type="text" name="takingInput"
                        value={task}
                        onChange={updatetask}
                        />
                        <button onClick={updateArr}>Add</button>
                    </div>
                </div>

                <div className="taskbox"><h1>Your today's task</h1>
                    <List arr={arr}></List>
                </div>
            </div>

        </>
    )
}