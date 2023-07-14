import CardInfor from "./CardInfor"
const Cards = (props)=>{
    console.log(props.cardsData)
    return(
        <div className="container">
            <div className="row"> 
                {props.cardsData.map(card=>(
                    <CardInfor key={card.key} name={card.name} level={card.level} 
                    point={card.point} image={card.imageURL} description={card.description}/>
                    ))
                }
            </div>
        </div> 
    )
}

export default Cards
