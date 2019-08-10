import React from 'react';
import Card from 'react-bootstrap/Card'

const Msg = (props) => (

    <Card className ="message">
    <Card.Body className ="msg-body">
        {
            props.body.map((msgPart, index) => (
                
                <div key={index}>  {"username"} <p> {msgPart} </p></div>

        ))
        }
    </Card.Body>  
    </Card>



);

export default Msg;