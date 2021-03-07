import React from 'react'

const InputBox = (id, text) => {
    return (
        <div>
        <label>{text}</label>
        <input type="text" id={id}/>
        <br/>
            
        </div>
    )
}

export default InputBox
