import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from 'axios';

import * as SquadActions from '../redux/squad_actions';
import * as UserActions from '../redux/user_actions';

import '../css/squad_profile_bar.css';

class SquadProfileBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      user: this.props.user,
      formation: null,
      squadname: null,
      squad: this.props.squad,
    }
    this.onCreate = this.onCreate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
    this.onDelete = this.onDelete.bind(this);
  }

  componentWillMount() {
    const url = "http://localhost:8080/formation/displayAllFormations"
    axios.get(url).then(res => {
      let items = res.data;
      items.unshift('Select');
      this.setState({
        items: items
      })
    }, err => {
      console.log("Read Formations got an error: ",err);
    });
  }

  componentWillReceiveProps(nextProps) {
    // if (nextProps.squad) {
    //   let { chem, rat } = this.state;
    //   const squadId = nextProps.squad.squadId;
    //   const chemurl = "http://localhost:8080/squad/getSquadChemistry?squad_id="+squadId;
    //   const raturl = "http://localhost:8080/squad/getSquadRating?squad_id="+squadId;
    //   axios.all([
    //     axios.get(chemurl),
    //     axios.get(raturl)
    //   ])
    //   .then(axios.spread((chemRes, ratRes) => {
    //     chem = chemRes.data;
    //     rat = ratRes.data;
    //     this.setState({
    //       squad: nextProps.squad,
    //       chem: chem,
    //       rat: rat,
    //     });
    //   }));
    // }
    // console.log(nextProps.squad);
    this.setState({
      squad: nextProps.squad
    })
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  onCreate(e) {
    e.preventDefault();

    const { store } = this.props;
    const { formation, squadname, user } = this.state;
    // set formation
    store.dispatch(SquadActions.setFormation(formation));
    // get squad and create squad here
    const url = "http://localhost:8080/squad/createSquad?user_name="
      + user.userName + "&squad_name=" + squadname
      + "&formation_name=" + formation;
    console.log('url', url);
    axios.post(url)
    .then(function (response) {
      alert("Successfully created a squad");
      store.dispatch(SquadActions.createSquad(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onUpdate(e) {
    e.preventDefault();
    const { store, squad } = this.props;
    const { squadname } = this.state;

    const url = "http://localhost:8080/squad/renameSquad?squad_id="
      + squad.squadId + "&new_squad_name=" + squadname;
    axios.put(url)
    .then(function (response) {
      alert(response.data);
      store.dispatch(SquadActions.createSquad(response.data));
    })
    .then(function () {
      const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squad.squadId;
      axios.get(url)
      .then(function (response) {
        store.dispatch(SquadActions.createSquad(response.data));
      })
      .catch(function (error) {
        console.log(error);
      })
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onDelete(e) {
    const { store, squad, user } = this.props;
    const url = "http://localhost:8080/squad/removeSquad?user_name="
      + user.userName + "&squad_id=" + squad.squadId;
    axios.delete(url)
    .then(function (res) {
      alert(res.data);
    })
    .then(function () {
      store.dispatch(SquadActions.removeSquad());
      store.dispatch(UserActions.changeContent('SQUADS'));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const { store } = this.props;
    const { items, squad } = this.state;
    return (
      <div className='searching_bar_container'>
        <div className='searching_input'>
          <Form inline onSubmit={squad ? this.onUpdate : this.onCreate}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="squadname" className="mr-sm-2">Squad Name</Label>
              <Input
                name="squadname"
                id="squadname"
                placeholder="Name Your Squad"
                defaultValue={squad ? squad.squadName : null}
                onChange={this.handleChange}/>
            </FormGroup>
            <Label className='info'>{squad ? squad.chemistry : 0} Chem</Label>
            <Label className='info'>{squad ? squad.rating : 0} Rate</Label>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label for="formation" className="mr-sm-2">Formation</Label>
              <Input type="select"
                name="formation"
                id="formation"
                defaultValue={squad? squad.formation : null}
                onChange={this.handleChange}>
                {items.map(function(item) {
                  return (
                    <option id={item}>{item}</option>
                  )
                })}
              </Input>
            </FormGroup>
            <Button>Save</Button>
          </Form>
          <Button onClick={this.onDelete}>Delete Squad</Button>
        </div>
      </div>
    );
  }
}

export default SquadProfileBar;
