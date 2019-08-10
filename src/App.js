import React, { Component } from 'react';
import ThreadDisplay from './ThreadDisplay/components/ThreadDisplay';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    /* firebase configuration */
    const config = {
      apiKey: "AIzaSyANqbmord6ooW49dRQhlGqth2FraA1XB3E",
      authDomain: "msgboard-57d90.firebaseapp.com",
      databaseURL: "https://msgboard-57d90.firebaseio.com",
      projectId: "msgboard-57d90",
      storageBucket: "",
      messagingSenderId: "584563961287",
      appId: "1:584563961287:web:eab587aeb70852ee"
    };

    this.app = firebase.initializeApp(config);
    this.database = this.app.database();
  }



  render(){
    return (
      <ThreadDisplay database={this.database}  /> 
      
    );
  }
}

export default App;
