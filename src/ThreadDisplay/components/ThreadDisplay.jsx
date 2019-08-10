import React, { Component } from 'react';
import Msg from '../../msg/component/Msg';
import TextInput from '../../textInput/component/TextInput';


class ThreadDisplay extends Component {

    constructor(props){
        super(props);
        this.addMsg = this.addMsg.bind(this);
        this.state = {
          msgs: [],
        }
      }

    addMsg(newBody) {
        const newState = Object.assign({}, this.state);
        newState.msgs.push(newBody); 
        this.setState(newState);
      }

    render() {
        return(
            <div>
                {this.state.msgs.map((body, index) => {
                    return(
                            <Msg key={index} body={body} />
                            )
                        })
                    }  

                <TextInput addMsg={this.addMsg} /> 
            </div>
        );
    }}

export default ThreadDisplay;



 
