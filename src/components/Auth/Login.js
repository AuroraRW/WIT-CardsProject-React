import {auth, signInWithEmailAndPassword, db, ref, get, child} from '../../module/firebase'
import {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import InputEmail from './InputEmail'
import InputPassword from './InputPassword'

const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const history = useHistory()
    
    const saveEmail = (userEmail)=>{
        setEmail(userEmail)
    }
    const savePassword = (userPassword)=>{
        setPassword(userPassword)
    }
    const loginUser = (e)=>{
        e.preventDefault()

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential)=>{
            const userKey = userCredential.user.uid
            const dbRef = ref(db)
            get(child(dbRef, `Users/${userKey}`)).then((snapshot) => {
                if (snapshot.exists()) {
                    let name = snapshot.val().FirstName
                    localStorage.setItem('username', name)
                    history.push('/cards')

                } else {
                  console.log("No data available");
                }
              }).catch((error) => {
                console.error(error);
              });
        })
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <h1 className="text-center fst-italic">Login</h1>
                    <form action="" className="bg-light p-3 rounded-3 shadow">
                        <InputEmail onSaveEmail={saveEmail}/>
                        <InputPassword onSavePassword={savePassword}/>
                        <div className="d-flex justify-content-between">
                            <Link to="/signup" className="text-decoration-none text-warning">Create a new account</Link>
                            <button className="btn btn-warning my-btn-color" onClick={loginUser}>Log In</button>
                        </div>
                    </form>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}

export default Login