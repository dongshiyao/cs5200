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
import { connect } from 'react-redux';

import * as UserActions from '../redux/user_actions';

import '../css/login.css';

class Register extends Component {
  constructor(props) {
		super(props);

    this.state = {
      username: '',
      password: '',
      email:'',
      isPremium: false,
      creditCardNum: null,
      creditCardExp: null,
      // submitted: false
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onChecked = this.onChecked.bind(this);
	}

  onSwitch(destination) {
    const { store } = this.props;
    store.dispatch(UserActions.changeContent(destination));
  }

  onSubmit(e) {
    console.log('register button clicked');

    e.preventDefault();

    this.setState({ submitted: true });

    const {
      username,
      password,
      email,
      isPremium,
      creditCardNum,
      creditCardExp
    } = this.state;

    const { store } = this.props;

    if (isPremium) {
      const url = 'http://localhost:8080/user/createPremiumUser';
      const user = {
        userName: username,
        password: password,
        email: email,
        isPremium: isPremium,
        creditCardNum: creditCardNum,
        creditCardExp: creditCardExp
      }
      axios.post(url, user)
      .then(function (response) {
        alert(response.data);
        console.log(response);
      })
      .then(function () {
        store.dispatch(UserActions.changeContent('LOGIN'));
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      const url = 'http://localhost:8080/user/createFreeUser';
      const user = {
        userName: username,
        password: password,
        email: email,
        isPremium: isPremium
      };
      axios.post(url, user)
      .then(function (response) {
        alert(response.data);
        console.log(response);
      })
      .then(function () {
        store.dispatch(UserActions.changeContent('LOGIN'));
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onChecked() {
    this.setState({
      isPremium: !this.state.isPremium
    })
  }

  render() {
    return (
      <div className="login_bg">
        <div className="login_card">
          <h1 className="header">Register</h1>
          <br />
          <Form onSubmit={this.onSubmit}>
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
              <Label className='label' for="email">Email</Label>
              <Input
                type="email"
                name="email"
                id="emial"
                placeholder="email"
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
            <FormGroup check>
              <Label className='label' check>
                <Input
                  type="checkbox"
                  refs='isPremium'
                  defaultChecked={this.state.isPremium}
                  onChange={this.onChecked}
                  />{' '}
                Register as Premium User
              </Label>
            </FormGroup>
            <FormGroup>
              <Label className='label' for="creditCardNum">Credit Card Number</Label>
              <Input
                disabled={!this.state.isPremium}
                type="text"
                name="creditCardNum"
                id="creditCardNum"
                placeholder="creditCardNum"
                onChange={this.handleChange}/>
            </FormGroup>
            <FormGroup>
              <Label className='label' for="creditCardExp">Credit Card Exprie Date</Label>
              <Input
                disabled={!this.state.isPremium}
                type="date"
                name="creditCardExp"
                id="creditCardExp"
                placeholder="date placeholder"
                onChange={this.handleChange} />
            </FormGroup>
            <Button>Register</Button>
          </Form>
          <div className="footer">
            <a onClick={this.onSwitch.bind(this,'LOGIN')}>Cancel</a>
          </div>
        </div>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
    return { }
}

const RegisterPage = connect(mapStateToProps)(Register);
export default RegisterPage;
