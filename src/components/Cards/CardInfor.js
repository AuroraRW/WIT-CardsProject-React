import CardLeft from "./CardLeft"
import CardRight from "./CardRight"

const CardInfor = (props)=>{
    return(
        <div className="card d-flex flex-row shadow m-2 p-0" style={{width: "28rem"}}>
            <CardLeft level={props.level} image={props.image} point={props.point}/>
            <CardRight name={props.name} description={props.description}/>
        </div>
    )
}

export default CardInfor