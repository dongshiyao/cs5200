import React, { Component } from 'react';
import {
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

import * as UserActions from '../redux/user_actions';
import * as SquadActions from '../redux/squad_actions';
import * as SearchingActions from '../redux/searching_actions';

class PageNavbar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false,
      user: this.props.user
    };

    this.toggle = this.toggle.bind(this);
    this.onLogout = this.onLogout.bind(this);

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      user: nextProps.user
    })
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  onLogout() {
    const { store } = this.props;
    store.dispatch(UserActions.logout());
    store.dispatch(UserActions.changeContent('LOGIN'));
    store.dispatch(SearchingActions.removeAllFilters());
  }

  onSwitch(destination) {
    const { store } = this.props;
    store.dispatch(UserActions.changeContent(destination));
    store.dispatch(SearchingActions.removeAllFilters());
    store.dispatch(SquadActions.removeSquad());
  }

  render() {
    const { user } = this.state;
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">FIFA</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          {user ? (
            <Collapse isOpen={this.state.isOpen} navbar>
                {user.isPremium ? (
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink onClick={this.onSwitch.bind(this,'PLAYERSDB')}>PlyersDB</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={this.onSwitch.bind(this,'SQUADS')}>Squads</NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink onClick={this.onSwitch.bind(this,'SQUADBUILDER')}>SquadBuilder</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {user.userName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.onSwitch.bind(this,'HOME')}>
                          Homepage
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <a onClick={this.onLogout}>Logout</a>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                ) : (
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink onClick={this.onSwitch.bind(this,'PLAYERSDB')}>PlyersDB</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                      <DropdownToggle nav caret>
                        {user.userName}
                      </DropdownToggle>
                      <DropdownMenu right>
                        <DropdownItem onClick={this.onSwitch.bind(this,'HOME')}>
                          Homepage
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                          <a onClick={this.onLogout}>Logout</a>
                        </DropdownItem>
                      </DropdownMenu>
                    </UncontrolledDropdown>
                  </Nav>
                )}
            </Collapse>
          ) : (
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink onClick={this.onSwitch.bind(this,'LOGIN')}>Login</NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          )}
        </Navbar>
      </div>
    );
  }
}

export default PageNavbar;
