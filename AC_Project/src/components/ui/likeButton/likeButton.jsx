import { useState } from "react";

function  LikeButton(){
    let [state,setState] = useState(false)

    let like = ()=>{
        setState(!state)
    }

    return (
        <>
            <button onClick={like}><i className={state ? "fa-solid fa-heart" : "fa-regular fa-heart"} style={{color : state?"red":"gray",fontSize:"24px"}}></i>
            </button>
        </>
    )
}

export default LikeButton