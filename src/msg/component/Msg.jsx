import React from 'react';
import Card from 'react-bootstrap/Card'

const Msg = (props) => (

    <Card className ="message">
    <Card.Body className ="msg-body">
        {props.body}
    </Card.Body>
    </Card>



);

export default Msg;