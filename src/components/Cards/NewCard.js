import {useState} from 'react'
import {useHistory} from "react-router-dom";
import {db, ref, set} from '../../module/firebase'
import getRandomKey from '../../module/getRandomKey';
const NewCard = ()=>{
    const [enteredName, setEnteredName] = useState('')
    const [enteredDescription, setEnteredDescription] = useState('')
    const [enteredLevel, setEnteredLevel] = useState(0)
    const [enteredPoint, setEnteredPoint] = useState(0)
    const [enteredImage, setEnteredImage] = useState('')

    const history = useHistory()

    const submitHandler = (e)=>{
        e.preventDefault()
        const newCardData = {
            name:enteredName,
            description: enteredDescription,
            level: enteredLevel,
            point: enteredPoint,
            imageURL: enteredImage
        }

        const cardKey = getRandomKey()
        set(ref(db, 'Cards/' + cardKey), newCardData)
        .then(()=>{
            history.push('/cards')
        })
    }
    return(
    <div className="container">
        <div className="row">
            <div className="col-sm-12 col-md-4"></div>
            <div className="col-sm-12 col-md-4">
                <h1 className="text-center fst-italic">New Card</h1>
                <form action="">
                    <div>
                        <label className="form-label" htmlFor="">Name:</label>
                        <input className="form-control" type="text" onChange={(e)=>{setEnteredName(e.target.value)}}/>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Description:</label>
                        <textarea className="form-control" name="" id="" cols="30" rows="5" onChange={(e)=>{setEnteredDescription(e.target.value)}}></textarea>
                    </div>
                    <div className="form-block">
                        <div>
                            <label className="form-label" htmlFor="">Level:</label>
                            <input className="form-control" type="number" min="0" onChange={(e)=>{setEnteredLevel(e.target.value)}}/>
                        </div>
                        <div>
                            <label className="form-label" htmlFor="">Points:</label>
                            <input className="form-control" type="text" onChange={(e)=>{setEnteredPoint(e.target.value)}}/>
                        </div>
                    </div>
                    <div>
                        <label className="form-label" htmlFor="">Image URL:</label>
                        <input className="form-control" type="text" onChange={(e)=>{setEnteredImage(e.target.value)}}/>
                    </div>
                </form>
                <div className="d-flex justify-content-end m-3">
                    <button className="btn btn-warning" onClick={submitHandler}>Submit</button>
                </div>
            </div>
            <div className="col-sm-12 col-md-4"></div>
        </div>
    </div>
    )
}

export default NewCard