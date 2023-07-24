import {remove, db, ref} from '../../module/firebase'
import { useHistory} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import './CardRight.css'
const CardRight = (props)=>{
    const history = useHistory()
    const deleteCard = ()=>{
        remove(ref(db, 'Cards/' + props.index)).then(()=>{
            history.push('/cards')
        })
    }

    return(
        <div className="m-3 position-relative colorStyle" style={{width: "16rem"}}>
            <div className="d-flex justify-content-end position-absolute top-0 end-0">
                <i className="bi bi-pencil-square" onClick={()=>{props.onShowModal()}}></i>
                <i className="bi bi-trash3-fill" onClick={deleteCard}></i>
            </div>
            <div>
                <h1>{props.name}</h1>
            </div>
            <div>
                <p className="lh-sm">{props.description}</p>
            </div>
            <div className="position-absolute bottom-0 end-0">
                <a href="https://www.google.com">
                    <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
        </div>
    )
}

export default CardRight