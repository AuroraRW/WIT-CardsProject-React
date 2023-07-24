import CardInfor from "./CardInfor"
import {Link, useHistory} from "react-router-dom"
import { auth, signOut, db, ref, get } from '../../module/firebase'
import { useState } from 'react'
const Cards = ()=>{
    const [cardsData, setCardsData] = useState([])
    const history = useHistory()
    
    if (localStorage.getItem('username')) {
        get(ref(db, 'Cards')).then((snapshot)=>{
            if (snapshot.exists()) {
                const data = snapshot.val()
                let finalCards=[]
        
                for(let [k,v] of Object.entries(data)){
                    let newCard={}
                    newCard={...v, key:k}
                    finalCards.push(newCard)
                }
                setCardsData(finalCards)
            }
        })
        const logoutUser = () => {
            signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    localStorage.removeItem('username')
                    history.push("/login")
                })
                .catch((error) => {
                    console.log(error)
                });
        }
        return(
            <div className="container">
                <div className="d-flex justify-content-end m-2">
                    <p className="m-2">Hi, {localStorage.getItem('username')}</p>
                    <button className="btn btn-warning" onClick={logoutUser}>Logout</button>
                </div>
                <div className="row"> 
                    {cardsData.map(card=>(
                        <CardInfor key={card.key} index={card.key} name={card.name} level={card.level} 
                        point={card.point} image={card.imageURL} description={card.description}/>
                        ))
                    }
                </div>
                <Link className="btn btn-warning" to='/newcard'>Create</Link>
            </div> 
        )
    }else{
        return (
            <h1>Please <Link to='/login'>login</Link></h1>
        )
    }
    
}

export default Cards
