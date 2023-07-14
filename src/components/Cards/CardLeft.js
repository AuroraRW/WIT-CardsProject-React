import CardBar from "./CardBar"
import CardImage from "./CardImage"

const CardLeft = (props)=>{
    return(
        <div className="bg-info rounded-2 px-2">
            <CardBar title={'LEVEL'} level={props.level}/>
            <CardImage />
            <CardBar title={'POINTS'} point={props.point}/>
        </div>
    )
}

export default CardLeft