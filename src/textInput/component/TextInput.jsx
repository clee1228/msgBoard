import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class textInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newBody: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.createMsg = this.createMsg.bind(this);
    }

    handleInput(ev){
        this.setState({
          newBody: ev.target.value
         });
      }

    createMsg(){
        this.props.addMsg(this.state.newBody);
        this.setState({
            newBody: '',
        });
    }

    render() {
        return(
            <div>

            <Form className = "form">
            <InputGroup className="mb-3" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  name="username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
             
  
              <Form.Group controlId="inputMessage">
              <Form.Control 
                    as="textarea"
                    size="sm"
                    name="message"
                    rows="3" 
                    placeholder="Type your message here..." 
                    value={this.state.newBody}
                    onChange={this.handleInput} />
                </Form.Group>
             
              <Button 
                onClick={this.createMsg}
                className="submit" 
                variant="info" 
                size="sm" block>
                Submit
              </Button>
            </Form> 

            </div>


        )
    }
}

export default textInput; 