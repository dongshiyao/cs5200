import React, { Component } from 'react';

import ReactTable from "react-table";
import axios from 'axios';

import * as UserActions from '../redux/user_actions';
import * as SquadActions from '../redux/squad_actions';

import 'react-table/react-table.css';
import '../css/playersdb_header.css';

class SquadTable extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: this.props.user,
      data: []
    };
  }

  componentWillMount() {
    const url = "http://localhost:8080/squad/displaySquadByUserName?user_name=" + this.state.user.userName;
    axios.get(url).then(res => {
      this.setState({
        data: res.data
      })
    }, err => {
      console.log("Get squads got an error: ", err);
    });
  }

  getTdProps = (state, rowInfo, column, instance) => {
    return {
      onClick: (e, handleOriginal) => {
        console.log("It was in this row:", rowInfo);

        const squadId = rowInfo.row.squadId;
        console.log(squadId);
        const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squadId;
        axios.get(url).then(res => {
          const squad = res.data
          const { store } = this.props;
          store.dispatch(SquadActions.createSquad(squad));
          store.dispatch(UserActions.changeContent('SQUADBUILDER'));
        }, err => {
          console.log("Get squads got an error: ", err);
        });
      }
    };
  }

  render() {
    // const { data } = this.state;
    const data = this.state.data;
    const header = (
      <div className='player_header'>
        <br />
        <h2>FIFA 18 Squads </h2>
        <p>Browse Your FIFA 18 Squad</p>
        <a >home</a>
        {'/'}
        <a >Squads</a>
			</div>
    );

    const { store } = this.props;

    const table = (
      <ReactTable
        getTdProps={(state, rowInfo) => {
          return {
            onClick: (e, handleOriginal) => {
              if (rowInfo) {
                console.log("It was in this row:", rowInfo);

                const squadId = rowInfo.row.squadId;
                console.log(squadId);
                const url = "http://localhost:8080/squad/readSquadInfoBySquadId?squad_id=" + squadId;
                axios.get(url).then(res => {
                  const squad = res.data
                  const { store } = this.props;
                  store.dispatch(SquadActions.removeSquad());
                  store.dispatch(SquadActions.createSquad(squad));
                }, err => {
                  console.log("Get squads got an error: ", err);
                })
                .then(function () {
                  store.dispatch(UserActions.changeContent('SQUADBUILDER'));
                });
              }
            }
          };
        }}
        data={data}
        columns={[
          {
            Header: "Squad Profile",
            columns: [
              {
                Header: "SquadID",
                accessor:"squadId"
              },
              {
                Header: "SquadName",
                accessor: "squadName"
              },
              {
                Header: "Formation",
                accessor: "formationName"
              },
              {
                Header: "Rating",
                accessor: "rating"
              },
              {
                Header: "Chemistry",
                accessor: "chemistry"
              }
            ]
          }
        ]}
      />
    );

    return (
      <div>
        {header}
        {table}
      </div>
    );
  }
}

export default SquadTable;
