import React, { Component } from 'react';
import Msg from '../../msg/component/Msg';
import TextInput from '../../textInput/component/TextInput';

class ThreadDisplay extends Component {

    constructor(props){
        super(props);
        this.dbRef = this.props.database.ref().child('msg');
        this.addMsg = this.addMsg.bind(this);
        this.updateLocalState = this.updateLocalState.bind(this); 
        this.state = {
          msgs: [],
        }
      }

    componentWillMount() {
        const {updateLocalState} = this;
        this.dbRef.on('child_added', snapshot => {
            const response = snapshot.val();
            updateLocalState(response);
        });
    }

    addMsg(msgBody) {
        const msgToSave = {msgBody:msgBody};
        this.dbRef.push().set(msgToSave);
    }

    updateLocalState(response){
        const msgs = this.state.msgs;
        const brokenDownPost = response.msgBody.split(/[\r\n]/g);
        msgs.push(brokenDownPost);
        console.log('msgs =' + msgs)
        this.setState({
            msgs: msgs,
        });
    }

    render() {
        return(
            <div>
                {
                    this.state.msgs.map((msgBody, index) => {
                        return(
                                <Msg key={index} body={msgBody} />
                                )
                            })
                    }  

                <TextInput addMsg={this.addMsg} /> 
            </div>
        );
    }}

export default ThreadDisplay;



 
