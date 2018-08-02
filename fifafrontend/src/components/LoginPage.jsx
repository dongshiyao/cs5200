import React, { Component } from 'react';
import {
  Form,
  FormGroup,
  Label,
  Button,
  Container,
  Row,
  Col,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input
} from 'reactstrap';
import axios from 'axios';
import * as UserActions from '../redux/user_actions';

import '../css/login.css';

class LoginPage extends Component {
  constructor(props) {
		super(props);

    this.state = {
      username: '',
      password: '',
      submitted: false
    };

    this.onLogin = this.onLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
	}

  onLogin(e) {

    e.preventDefault();

    this.setState({ submitted: true });
    const { username, password } = this.state;
    // console.log(this.state);
    const user = {
      userName: username,
      password:password
    };

    const { store } = this.props;
    const url = 'http://localhost:8080/user/userLogin';

    axios.post(url, user)
    .then(function (response) {
      const url = "http://localhost:8080/user/findUserByUserName?user_name=" + username;
      axios.get(url).then(res => {
        store.dispatch(UserActions.login(res.data));
        store.dispatch(UserActions.changeContent('HOME'));
      }, err => {
        console.log("Find user got an error: ",err);
      });
    })
    .catch(function (error) {
      alert("The username and password you entered did not match our records. Please double check and try again.");
    });

  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onSwitch(destination) {
    const { store } = this.props;
    store.dispatch(UserActions.changeContent(destination));
  }

  render() {
    return (
      <div className="login_bg">
        <div className="login_card">
          <h1 className="header">Login</h1>
          <br />
          <Form onSubmit={this.onLogin}>
            <FormGroup>
              <Label className='label' for="username">UserName</Label>
              <Input
                type="text"
                name="username"
                id="username"
                placeholder="username"
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label className='label' for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.handleChange}/>
            </FormGroup>

            <Button>Login</Button>
          </Form>
          <div className="footer">
            <a onClick={this.onSwitch.bind(this,'REGISTER')}>Sign Up</a>
          </div>
        </div>
      </div>
    );
  }
};

export default LoginPage;
