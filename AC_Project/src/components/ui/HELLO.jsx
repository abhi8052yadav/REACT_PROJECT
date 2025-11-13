function HELLO({message,color}){ 
    return(
        <>
            <div style={{color:color}}>
                <h1>
                {message}
                </h1>
            </div>
        </>
    )
}
export default HELLO