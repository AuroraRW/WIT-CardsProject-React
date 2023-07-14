import {useState} from 'react'
import { auth, signOut, createUserWithEmailAndPassword, db, ref, set } from '../../module/firebase'
import { useHistory } from "react-router-dom";
const Signup = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [gender, setGender] = useState('')

    const [friend, setFriend] = useState(false)
    const [website, setWebsite] = useState(false)
    const [newspaper, setNewspaper] = useState(false)

    const history = useHistory()

    const emailChange=(e)=>{
        setEmail(e.target.value)
    }
    const passwordChange = (e) => {
        setPassword(e.target.value)
    }
    const firstnameChange = (e) => {
        setFirstName(e.target.value)
    }
    const lastnameChange = (e) => {
        setLastName(e.target.value)
    }

    const genderChange = (e) => {
        setGender(e.target.value)
    }

    const createUser=(e)=>{
        e.preventDefault()
        console.log(email)
        console.log(password)
        console.log(firstName)
        console.log(lastName)
        console.log(gender)
        let prefer = []
        if(friend===true){
            prefer.push('friend')
        }
        if(website===true){
            prefer.push('website')
        }
        if(newspaper===true){
            prefer.push('news paper')
        }
        console.log(prefer)

        const newUser = {Email: email, Password: password, 
            FirstName: firstName, LastName: lastName, 
            Gender: gender, Perfer:prefer}
        
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            console.log(userCredential.user)
            // save the user into database
            const userKey = userCredential.user.uid
            set(ref(db, 'Users/' + userKey), newUser)
            .then(()=>{
                // signout
                signOut(auth)
                .then(() => {
                    // Sign-out successful.
                    console.log('done')
                    history.push("/")
                })
                .catch((error) => {
                    console.log(error)
                });

            })
        })
    }

    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                    <h1 className="text-center fst-italic mt-3">Sign Up</h1>
                    <form action="" className="bg-light p-3 rounded-3 shadow m-5">
                        <div className="mb-3">
                            <label className="form-label" htmlFor="signup-email">Email:</label>
                            <input className="form-control" id="signup-email" size='50' type="email" onChange={emailChange}/>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="">Password:</label>
                            <input className="form-control" type="password" size="50" onChange={passwordChange}/>
                        </div>

                        <div className="d-flex justify-content-between">
                            <div className="mb-3">
                                <label className="form-label" htmlFor="">First name:</label>
                                <input className="form-control" type="text" onChange={firstnameChange}/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label" htmlFor="">Last name:</label>
                                <input className="form-control" type="text" onChange={lastnameChange}/>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="">Gender:</label>
                            <div className="d-flex">
                                <div className="form-check mx-2">
                                    <input className="form-check-input" onChange={genderChange} id="male-radio" type="radio" name="gender" value="male" /> <label className="form-check-label" htmlFor="male-radio"> Male</label>
                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input"  onChange={genderChange} id="female-radio" type="radio" name="gender" value="female" /> <label className="form-check-label" htmlFor="female-radio"> Female</label>

                                </div>
                                <div className="form-check mx-2">
                                    <input className="form-check-input"  onChange={genderChange} id="notsure-radio" type="radio" name="gender" value="not sure" /> <label className="form-check-label" htmlFor="notsure-radio"> Not sure</label>
                                </div>
                            </div>
                        </div>
                        <div className="mb-3">
                            <label className="form-label" htmlFor="">How did you hear this:</label>
                            <div>
                                <div className="d-flex">
                                    <div className="form-check mx-2">
                                        <input className="form-check-input"  onChange={()=>{setFriend(!friend)}} id="friends-checkbox" type="checkbox" /><label htmlFor="friends-checkbox">Friends</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input" onChange={()=>{setWebsite(!website)}} type="checkbox" /><label htmlFor="">Website</label>
                                    </div>
                                    <div className="form-check mx-2">
                                        <input className="form-check-input"  onChange={()=>{setNewspaper(!newspaper)}} type="checkbox" /><label htmlFor="">News paper</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end">
                            <button className="btn btn-warning" type="submit" onClick={createUser}>Sign up</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    )
}

export default Signup