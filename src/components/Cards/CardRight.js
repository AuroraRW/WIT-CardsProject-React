import './CardRight.css'
const CardRight = (props)=>{
    return(
        <div className="m-3 position-relative colorStyle" style={{width: "16rem"}}>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div>
                <p className="lh-sm">{props.description}</p>
            </div>
            <div className="position-absolute bottom-0 end-0">
                <a href="https://www.google.com" className="text-decoration-none">LinkedIn </a>
            </div>
        </div>
    )
}

export default CardRight