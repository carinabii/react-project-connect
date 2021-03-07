import React from 'react'
import Card from 'react-bootstrap/Card';

const Btn = ({id, text, color}) => {

    return (

    <Card>
        <Card.Body
    id={id}
    style={{backgroundColor: color, padding:'4rem', borderRadius:'15px' }}
    color="steelblue"
    className='btn'
    >
        {text}
        
  </Card.Body>
  </Card>
    )
}

export default Btn
