import React from 'react';
import axios from 'axios';
import './App.css';
import UserCard from './components/UserCard';
import FollowersCard from './components/FollowersCard';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userData: [],
      followersData: []
    };
    console.log('constructor running');
  };

  componentDidMount(){
    axios
    .get('https://api.github.com/users/anthonyj713')
    .then(response => {
      this.setState({
        userData: response.data
      });
      console.log(response);
    })
    .catch(error => {
      console.log('the data was not returned', error)
    })
  

    axios
    .get('https://api.github.com/users/anthonyj713/followers')
    .then(response => {
      this.setState({
        followersData: response.data
      });
      console.log(response.data);
    })
    .catch(error => {
      console.log('the followers data was not returned', error)
    })
  }


render(){
  return (
    <div className='container'>
      <UserCard data={this.state.userData}/>
      
      {this.state.followersData.map(
       (i) => <FollowersCard data={i}/>
      )}
   

    </div>
  );
}
}

export default App;
