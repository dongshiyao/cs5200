import React, { Component } from 'react';
import ReactTable from "react-table";

import 'react-table/react-table.css';

class PlayersTable extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <ReactTable
          data={data}
          columns={[
            {
              Header: "Player Profile",
              columns: [
                {
                  Header: "",
                  Cell: (row) => {
                    return <div><img height={40} src={row.original.photo}/></div>
                  },
                  accessor: "photo"
                },
                {
                  Header: "Name",
                  accessor: "playerName"
                },
                {
                  Header: "League",
                  accessor: "league"
                },
                {
                  Header: "Club",
                  Cell: (row) => {
                    return <div><img height={34} src={row.original.clubLogo}/></div>
                  },
                  accessor: "clubLogo"
                },
                {
                  Header: "Nation",
                  Cell: (row) => {
                    return <div><img height={34} src={row.original.flag}/></div>
                  },
                  accessor: "flag"
                }

              ]
            },
            {
              Header: "Info",
              columns: [
                {
                  Header: "RAT",
                  accessor: "overall"
                },
                {
                  Header: "POS",
                  accessor: "position"
                },
                {
                  Header: "PAC",
                  accessor: "pace"
                },
                {
                  Header: "DRI",
                  accessor: "dribbling"
                },
                {
                  Header: "SHO",
                  accessor: "shooting"
                },
                {
                  Header: "DEF",
                  accessor: "defending"
                },
                {
                  Header: "PHY",
                  accessor: "physicality"
                },
                {
                  Header: "PAS",
                  accessor: "passing"
                },
              ]
            },
          ]}
        />
        <br />
      </div>
    );
  }
}

export default PlayersTable;
