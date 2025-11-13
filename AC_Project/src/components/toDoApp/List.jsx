export default function List({arr}){
    return(
        <>
            <ol>
                {
                    arr.map((li,index)=>(
                        <li key={index}>{li}</li>
                    ))
                }
            </ol>
        </>
    )
}