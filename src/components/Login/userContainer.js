import React, { Component } from 'react';
import loginForm from './loginForm';
import './style2.css';


const users = [{
  username: 'ajs',
  password: 'pass'
},{
  username: 'mark',
  password: 'rudy'
},{
  username: 'gelyte',
  password: '123'
},{
  username: 'stokrotkazdolin',
  password: 'panijeziora'
}];


class userContainer extends Component {
  constructor(props) {
    super(props);
    this.logIn = this.logIn.bind(this);
  }
  logIn() {
    //this.props
    const username = this.refs.username.value;
    const password = this.refs.password.value;
    if (username === '' || password === '') {
      console.log('NIEKO NEIVEDEI');
    } else {
      let foundUser = undefined;
      users.map((user) => {
        if (user.username === username && user.password === password) {
          console.log('Lets send Username:' +username + ' password:'+password);
          foundUser = user;
        }
      });
      if (foundUser) {
        this.props.onLoginClick(foundUser);
      } else {
        console.log('NIERA TOKIO NAUDOTOJO');
      }
    }
  }

  render() {

    return (
      <div className="userContainer">
        <div className="input-group">
            <div>
              <input type="text" ref='username' className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
            </div>
            <div>
              <input type="text" ref='password' className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
            </div>
          </div>
            <div className="options">
            <button onClick={this.logIn}>
              Log In
            </button>
        </div>
      </div>
    );
  }
}



export default userContainer;
