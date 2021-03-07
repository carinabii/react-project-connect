import React from 'react'

const Btn = ({id, text, color}) => {

    return (

    <button 
    id={id}
    style={{backgroundColor: color}}
    className='btn'
    >
        {text}
        </button>
    )
}

export default Btn
