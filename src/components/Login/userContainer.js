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
      <div className="row">
        <div className="col col-xs-12 input-group">
            <div>
              <input type="text" ref='username' className="form-control" placeholder="Username" aria-describedby="basic-addon1"/>
            </div>
            <div>
              <input type="password" ref='password' className="form-control" placeholder="Password" aria-describedby="basic-addon1"/>
            </div>
        </div>
      </div>
      <div className="row">
            <div className="col col-xs-12 option1">
            <button type="button" className="btn btn-success" onClick={this.logIn}>
              Log In
            </button>
            </div>
      </div>
      </div>
    );
  }
}



export default userContainer;
