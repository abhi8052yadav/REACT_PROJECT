import "./card.css"

function CARD({name,price,description})
{
    return(
        <>
            <div className="card">
                <div className="details">
                    <div className="name">{name}</div>
                    <div className="descrip">{description.map((d)=><li>{d}</li>)}</div>
                </div>
                <div className="price">
                    {price}
                </div>
            </div>
        </>
    )
}

export default CARD