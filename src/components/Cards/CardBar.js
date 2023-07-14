const CardBar = (props)=>{
    let output = props.title==='LEVEL'? 'LEVEL '+props.level : props.point+' POINTS' 
    return(
        <div className="bg-secondary m-3 rounded-3">
            <p className="text-center text-white fw-bolder px-2 text-nowrap">{output}</p>
        </div>
    )
}

export default CardBar