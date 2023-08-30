const InputEmail = (props) => {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="">Email:</label>
            <input className="form-control" type="email" size="30" placeholder="example@email.com" onChange={(e) => { props.onSaveEmail(e.target.value) }} />
        </div>
        
    )
}

export default InputEmail