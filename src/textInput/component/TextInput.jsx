import React, { Component } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

class textInput extends Component{
    constructor(props){
        super(props);
        this.state = {
            newMsgBody: '',
          
        };

        this.handleInput = this.handleInput.bind(this);
        this.createMsg = this.createMsg.bind(this);
    }

    handleInput(ev){
        this.setState({
          newMsgBody: ev.target.value
         });
      }

    // handleUser(name){
    //   this.setState({
    //     username: name.target.value
    //   })
    // }

    createMsg(){
        this.props.addMsg(this.state.newMsgBody);
        // console.log('username =' + this.state.username);
        this.setState({
            newMsgBody: '',
            // username: '',
        });
    }

    render() {
        return(
            <div>

            <Form className = "form">
            {/* <InputGroup className="mb-3" size="sm">
                <InputGroup.Prepend>
                  <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  placeholder="Username"
                  name="username"
                  // value={this.state.username}
                  // onChange={this.handleUser}
                />
              </InputGroup> */}
             
  
              <Form.Group controlId="inputMessage">
              <Form.Control 
                    as="textarea"
                    size="sm"
                    name="message"
                    rows="3" 
                    placeholder="Type your message here..." 
                    value={this.state.newMsgBody}
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