const InputPassword = (props) => {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="">Password:</label>
            <input className="form-control" type="password" size="30" placeholder="Password" onChange={(e) => { props.onSavePassword(e.target.value) }} />
        </div>
    )
}

export default InputPassword