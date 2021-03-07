import React from 'react'
import Button from 'react-bootstrap/Button';

const Btn = ({id, text, color}) => {

    return (

    <Button 
    id={id}
    variant="secondary"
    // style={{backgroundColor: color}}
    color="steelblue"
    className='btn'
    >
        {text}
        </Button>
    )
}

export default Btn
