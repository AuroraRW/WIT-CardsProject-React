import {useState} from 'react'
import {db, ref, set} from '../../module/firebase'
import {useHistory} from "react-router-dom";
import CardLeft from "./CardLeft"
import CardRight from "./CardRight"
import Modal from 'react-bootstrap/Modal'
const CardInfor = (props)=>{
    const [show, setShow] = useState(false)
    const history = useHistory()

    const [name, setName] = useState(props.name)
    const [description, setDescription] = useState(props.description)
    const [level, setLevel] = useState(props.level)
    const [point, setPoint] = useState(props.point)
    const [image, setImage] = useState(props.image)

    const closeModal = () => setShow(false)
    const showModal = ()=> {
        setShow(true)
    }
    const saveModal = () => {
        const data = {
            name:name,
            description:description,
            level:level,
            point:point,
            imageURL:image
        }
        set(ref(db, 'Cards/' + props.index), data)
        .then(()=>{
            setShow(false)
            history.go('/cards')
        })
        
    }

    return(
        <>
            <div className="card d-flex flex-row shadow m-2 p-0" style={{width: "28rem"}}>
                <CardLeft level={props.level} image={props.image} point={props.point}/>
                <CardRight index={props.index} name={props.name} description={props.description} onShowModal={showModal}/>
            </div>
            <Modal show={show} onHide={closeModal} backdrop="static">
                <Modal.Header closeButton>
                    <Modal.Title>Edit Card</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        <label className="form-label" htmlFor="">Name:</label>
                        <input className="form-control" type="text" value={name} onChange={(e)=>{setName(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Description:</label>
                        <textarea className="form-control" value={description} onChange={(e)=>{setDescription(e.target.value)}} name="" id="" cols="30" rows="5"></textarea>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Level:</label>
                        <input className="form-control" value={level} onChange={(e)=>{setLevel(e.target.value)}} type="number" min="0" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Points:</label>
                        <input className="form-control" value={point} onChange={(e)=>{setPoint(e.target.value)}} type="text" />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Image URL:</label>
                        <input className="form-control" value={image} onChange={(e)=>{setImage(e.target.value)}} type="text" />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <button type="button" className="btn btn-secondary" onClick={closeModal}>Cancel</button>
                    <button type="button" className="btn btn-primary" onClick={saveModal}>Save</button>
                </Modal.Footer>
            </Modal>
        </>
        

    )
}

export default CardInfor