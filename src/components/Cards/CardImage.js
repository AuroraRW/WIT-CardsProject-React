const CardImage = (props)=>{
    return(
        <div className="d-flex justify-content-center"> 
            <img style={{width:"100px"}} src={props.image} alt="male avatar with beard" />
        </div>
    )
}

export default CardImage

