import React from 'react';

import {
  Button,
  Container,
  Col,
  Form,
  FormGroup,
  InputGroup,
  InputGroupText,
  InputGroupAddon,
  Input,
  Jumbotron,
  Label,
  Row,
} from 'reactstrap';

import LoginPageContainer from './containers/login_container';
import RegisterPage from './components/RegisterPage';
import PageNavbarContainer from './containers/page_navbar_container';
import PageFooter from './components/PageFooter';
import PlayersDBContainer from './containers/players_db_container';
import SquadBuilderContainer from './containers/squad_builder_container';
import SquadsTableContainer from './containers/squad_table_container';

import * as UserActions from './redux/user_actions';

import axios from 'axios';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      pageContent: this.props.pageContent,
      creditCardNum: null,
      creditCardExp: null,
      email: null,
      password: null,
      ponged: 'Not Ponged'
    }
    console.log('MainPage', this.props);
    this.ping = this.ping.bind(this);
    this.onUpgrade = this.onUpgrade.bind(this);
    this.onDowngrade = this.onDowngrade.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.updateEmail = this.updateEmail.bind(this);
    this.updatePassword = this.updatePassword.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    console.log('Main pagecontent change', nextProps);
    this.setState({
      user: nextProps.user,
      pageContent: nextProps.pageContent
    })
  }

  ping() {
    axios.get("http://localhost:8080/players/hello?test=n").then(res => {
      console.log(res);
      alert("Received Successful response from server!");
      this.setState({ponged: 'Ponged! '});
    }, err => {
      console.log(err);
      alert("Server rejected response with: " + err);
    });
  }

  handleChange(e) {
    console.log('handleChange')
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onUpgrade(e) {
    e.preventDefault();
    const { user } = this.state;
    const { store } = this.props;
    if (user.isPremium) {
      alert('You are already a preminum user');
    } else {
      console.log('upgrade me');
      const upgradeInput = {
        userName: user.userName,
        creditCardNum: this.state.creditCardNum,
        creditCardExp: this.state.creditCardExp
      }
      const url = "http://localhost:8080/user/upgradeUser";
      axios.put(url, upgradeInput)
      .then(function (res) {
        alert(res.data);
      })
      .then(function () {
        const url = "http://localhost:8080/user/findUserByUserName?user_name=" + user.userName;
        axios.get(url).then(res => {
          store.dispatch(UserActions.updateInfo(res.data));
        }, err => {
          console.log("Find user got an error: ",err);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }

  onDowngrade() {
    const { user } = this.state;
    const { store } = this.props;
    if (user.isPremium) {
      console.log('Downgrade me');
      const url = "http://localhost:8080/user/downgradeUser?user_name=" + user.userName;
      axios.put(url)
      .then(function (response) {
        alert("You are a free user now");
        console.log(response);
      })
      .then(function () {
        const url = "http://localhost:8080/user/findUserByUserName?user_name=" + user.userName;
        axios.get(url).then(res => {
          store.dispatch(UserActions.updateInfo(res.data));
        }, err => {
          console.log("Find user got an error: ",err);
        });
      })
      .catch(function (error) {
        console.log(error);
      });
    } else {
      alert('Free user cannot downgrade');
    }
  }

  updateEmail(e) {
    e.preventDefault();
    const store = this.props.store;
    const userName = this.state.user.userName;
    const email = this.state.email;
    const url = "http://localhost:8080/user/updateEmail?user_name="
      + userName + "&email=" + email;
    axios.put(url)
    .then(function(response) {
      alert('Email Updated');
    })
    .then(function() {
      const url = "http://localhost:8080/user/findUserByUserName?user_name=" + userName;
      axios.get(url).then(res => {
        store.dispatch(UserActions.updateInfo(res.data));
      }, err => {
        console.log("Find user got an error: ",err);
      });
    })
  }

  updatePassword(e) {
    e.preventDefault();
    const store = this.props.store;
    const userName = this.state.user.userName;
    const password = this.state.password;

    const url = "http://localhost:8080/user/updatePassword?user_name="
      + userName;
    axios.put(url, password, {headers: {"Content-Type": "text/plain"}})
    .then(function(response) {
      alert('Password Updated');
    })
    .then(function() {
      const url = "http://localhost:8080/user/findUserByUserName?user_name=" + userName;
      axios.get(url).then(res => {
        store.dispatch(UserActions.updateInfo(res.data));
      }, err => {
        console.log("Find user got an error: ",err);
      });
    })
  }

  render() {
    const { user } = this.state;
    const welcomePage = this.state.user ? (
      <div>
        <Jumbotron>
          <h1 className="display-3">Hello {user.userName}!</h1>
          <p className="lead">Manage your status here:</p>
          <br />
            <Form onSubmit={this.onUpgrade}>
              <FormGroup>
                <Label for="creditCardNum">Credit Card Number</Label>
                <Input
                  type="text"
                  name="creditCardNum"
                  id="creditCardNum"
                  placeholder="creditCardNum"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <Label for="creditCardExp">Credit Card Exprie Date</Label>
                <Input
                  type="date"
                  name="creditCardExp"
                  id="creditCardExp"
                  placeholder="date placeholder"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button>Upgrade</Button>
            </Form>
            <hr />
          <Button onClick={this.onDowngrade}>Downgrade</Button>
          <hr />
          <Form inline onSubmit={this.updateEmail}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="email" className="mr-sm-2">Email</Label>
              <Input
                type="email"
                name="email"
                id="emial"
                placeholder="email"
                onChange={this.handleChange}/>
            </FormGroup>
            <Button>Update</Button>
          </Form>
          <hr />
          <Form inline onSubmit={this.updatePassword}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label className="mr-sm-2" for="password">Password</Label>
              <Input
                type="password"
                name="password"
                id="password"
                placeholder="password"
                onChange={this.handleChange}/>
            </FormGroup>
            <Button>Update</Button>
          </Form>
        </Jumbotron>
      </div>
    ) : (
      <div>
        <Jumbotron>
          <h1 className="display-3">Welcome to FIFA World!</h1>
          <p className="lead">This is the final project for CS5200 Database Management</p>
          <hr className="my-2" />
          <p>Developed by Shiyao Dong, Chi Zhang</p>

          <br />
          <Button onClick={this.ping}>sever greeting test</Button>
          <div>Test Connection: {this.state.ponged}</div>
          <br />
        </Jumbotron>
      </div>
    );

  const loginPageContainer = <LoginPageContainer store={this.props.store}/>;
  const registerPage = <RegisterPage store={this.props.store}/>;
  const squadsTableContainer = <SquadsTableContainer store={this.props.store}/>;
  const playersDBContainer = <PlayersDBContainer store={this.props.store}/>;
  const squadBuilderContainer = <SquadBuilderContainer store={this.props.store} />;

  let pageContent = welcomePage;
  switch (this.state.pageContent) {
    case 'LOGIN': {
      pageContent = loginPageContainer;
      break;
    }
    case 'REGISTER': {
      pageContent = registerPage;
      break;
    }
    case 'PLAYERSDB': {
      pageContent = playersDBContainer;
      break;
    }
    case 'SQUADS': {
      pageContent = squadsTableContainer;
      break;
    }
    case 'SQUADBUILDER': {
      pageContent = squadBuilderContainer;
      break;
    }
    default:
      break;
  }


    return (
      <div>
        <PageNavbarContainer store={this.props.store} />
        {pageContent}
        <PageFooter />
      </div>
    );
  }
}

export default MainPage;
