import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card'
import './App.css';

class App extends Component {
  render(){
    return (

    
       

      
      <div>
         <Card className ="message">
          <Card.Body>Hello</Card.Body>
        </Card>
        
          <Form className = "form">
          <InputGroup className="mb-3" size="sm">
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
           

            <Form.Group controlId="inputMessage">
            <Form.Control as="textarea" size="sm" rows="3" placeholder="Type your message here..."/>
              </Form.Group>
           
            <Button className="submit" variant="info" type="submit" size="sm" block>
              Submit
            </Button>
          </Form>
      </div>
    );
  }
}

export default App;
