import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: []
    };
    console.log('constructor running');
  }

  componentDidMount(){
    axios
    .get('https://api.github.com/users/anthonyj713')
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  }


render(){
  return (
    <div className='App'>
      
    </div>
  );
}
}

export default App;
