import React, { Component } from 'react';

import * as SquadActions from '../redux/squad_actions';
import * as SearchingActions from '../redux/searching_actions';
import axios from 'axios';

import PlayerCard from './PlayerCard';
import SquadSearchingPlayerContainer from '../containers/squad_searching_player_container';

import '../css/squad_add_player.css';

class SquadAddPlayer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      onPos: null,
      squad: this.props.squad,
      showSearch: this.props.showSearch,
      GKPlayer: this.props.GKPlayer,
    	STPlayer: this.props.STPlayer,
      CFPlayer: this.props.CFPlayer,
    	LMPlayer: this.props.LMPlayer,
    	LCMPlayer: this.props.LCMPlayer,
      RCMPlayer: this.props.RCMPlayer,
      RMPlayer: this.props.RMPlayer,
      LBPlayer: this.props.LBPlayer,
      LCBPlayer: this.props.LCBPlayer,
      RCBPlayer: this.props.RCBPlayer,
      RBPlayer: this.props.RBPlayer
    }
  }

  componentWillMount() {
    console.log('!!!!!!!!!!')
    if (this.state.squad) {
      let {
        GKPlayer,
        STPlayer,
        CFPlayer,
        LMPlayer,
        LCMPlayer,
        RCMPlayer,
        RMPlayer,
        LBPlayer,
        LCBPlayer,
        RCBPlayer,
        RBPlayer
      } = this.state;
      const squadId = this.state.squad.squadId;
      const { store } = this.props;
      const url = "http://localhost:8080/squad/displayPlayersInSquad?squad_id="+squadId;
      axios.get(url)
      .then(function (response) {
        response.data.map(junction => {
          const playerId = junction.playerId;
          const posNumber = junction.posNumber;
          const url = "http://localhost:8080/players/searchPlayerById?player_id="+playerId;
          axios.get(url)
          .then(function(response) {
            const player = response.data;
            switch (posNumber) {
              case 'ONE': {
                const pos = "ST";
                store.dispatch(SquadActions.addST(player));
                STPlayer = player;
                break;
              }
              case 'TWO': {
                const pos = "LM";
                store.dispatch(SquadActions.addLM(player));
                LMPlayer = player;
                break;
              }
              case 'THREE': {
                const pos = "LCM";
                store.dispatch(SquadActions.addLCM(player));
                LCMPlayer = player;
                break;
              }
              case 'FOUR': {
                const pos = "CF";
                store.dispatch(SquadActions.addCF(player));
                CFPlayer = player;
                break;
              }
              case 'FIVE': {
                const pos = "RCM";
                store.dispatch(SquadActions.addRCM(player));
                RCMPlayer = player;
                break;
              }
              case 'SIX': {
                const pos = "RM";
                store.dispatch(SquadActions.addRM(player));
                RMPlayer = player;
                break;
              }
              case 'SEVEN': {
                const pos = "LB";
                store.dispatch(SquadActions.addLB(player));
                LBPlayer = player;
                break;
              }
              case 'EIGHT': {
                const pos = "LCB";
                store.dispatch(SquadActions.addLCB(player));
                LCBPlayer = player;
                break;
              }
              case 'NINE': {
                const pos = "RCB";
                store.dispatch(SquadActions.addRCB(player));
                RCBPlayer = player;
                break;
              }
              case 'TEN': {
                const pos = "RB";
                store.dispatch(SquadActions.addRB(player));
                RBPlayer = player;
                break;
              }
              case 'ELEVEN': {
                const pos = "GK";
                store.dispatch(SquadActions.addGK(player));
                GKPlayer = player;
                break;
              }
              default:
                console.log('cannot find this position');
            }
            console.log('setstate');
            this.setState({
              GKPlayer: GKPlayer,
              STPlayer: STPlayer,
              CFPlayer: CFPlayer,
              LMPlayer: LMPlayer,
              LCMPlayer: LCMPlayer,
              RCMPlayer: RCMPlayer,
              RMPlayer: RMPlayer,
              LBPlayer: LBPlayer,
              LCBPlayer: LCBPlayer,
              RCBPlayer: RCBPlayer,
              RBPlayer: RBPlayer
            })
          })
          .catch(function (error) {
            console.log(error);
          });
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      showSearch: nextProps.showSearch,
      squad: nextProps.squad,
      GKPlayer: nextProps.GKPlayer,
    	STPlayer: nextProps.STPlayer,
      CFPlayer: nextProps.CFPlayer,
    	LMPlayer: nextProps.LMPlayer,
    	LCMPlayer: nextProps.LCMPlayer,
      RCMPlayer: nextProps.RCMPlayer,
      RMPlayer: nextProps.RMPlayer,
      LBPlayer: nextProps.LBPlayer,
      LCBPlayer: nextProps.LCBPlayer,
      RCBPlayer: nextProps.RCBPlayer,
      RBPlayer: nextProps.RBPlayer
    });
  }

  onClick = (player, position) => {
    const { store } = this.props;
    const { squad } = this.state;
    store.dispatch(SquadActions.squadSearchSwitch(this.state.showSearch));
    switch (position) {
      case 'GK': {
        this.setState({
          onPos: 'GK'
        });
        store.dispatch(SquadActions.addGK(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'ELEVEN'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
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
        break;
      }
      case 'ST': {
        this.setState({
          onPos: 'ST'
        });
        store.dispatch(SquadActions.addST(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'ONE'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'CF': {
        this.setState({
          onPos: 'CF'
        });
        store.dispatch(SquadActions.addCF(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'FOUR'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'LM': {
        this.setState({
          onPos: 'LM'
        });
        store.dispatch(SquadActions.addLM(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'TWO'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'LCM': {
        this.setState({
          onPos: 'LCM'
        });
        store.dispatch(SquadActions.addLCM(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'THREE'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'RCM': {
        this.setState({
          onPos: 'RCM'
        });
        store.dispatch(SquadActions.addRCM(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'FIVE'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'RM': {
        this.setState({
          onPos: 'RM'
        });
        store.dispatch(SquadActions.addRM(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'SIX'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'LB': {
        this.setState({
          onPos: 'LB'
        });
        store.dispatch(SquadActions.addLB(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'SEVEN'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'LCB': {
        this.setState({
          onPos: 'LCB'
        });
        store.dispatch(SquadActions.addLCB(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'EIGHT'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'RCB': {
        this.setState({
          onPos: 'RCB'
        });
        store.dispatch(SquadActions.addRCB(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'NINE'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      case 'RB': {
        this.setState({
          onPos: 'RB'
        });
        store.dispatch(SquadActions.addRB(player));
        if (player) {
          const url = "http://localhost:8080/squad/addPlayerToSquad";
          const squadPlayerJunction = {
            squadId: squad.squadId,
            playerId: player.playerId,
            posNumber: 'TEN'
          };
          axios.post(url, squadPlayerJunction)
          .then(function (response) {
            console.log(response);
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
        break;
      }
      default:
        console.log('SquadAddPlayer, position invalid');
    }
  }

  render() {
    const {
      showSearch,
      GKPlayer,
    	STPlayer,
      CFPlayer,
    	LMPlayer,
    	LCMPlayer,
      RCMPlayer,
      RMPlayer,
      LBPlayer,
      LCBPlayer,
      RCBPlayer,
      RBPlayer
    } = this.state;
    const squadLayer = (
      <div className='formation'>
        <table>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td>
                <PlayerCard onPos='ST' player={STPlayer} onClick={this.onClick}/>
                <div className='position_tag'>ST</div>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td>
                <PlayerCard onPos='LM' player={ LMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>LM</div>
              </td>
              <td>
                <PlayerCard onPos='LCM' player={ LCMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CM</div>
              </td>
              <td>
                <PlayerCard onPos='CF' player={ CFPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CF</div>
              </td>
              <td>
                <PlayerCard  onPos='RCM' player={ RCMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CM</div>
              </td>
              <td>
                <PlayerCard onPos='RM' player={ RMPlayer } onClick={this.onClick}/>
                <div className='position_tag'>RM</div>
              </td>
            </tr>
            <tr>
              <td>
                <PlayerCard onPos='LB' player={ LBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>LB</div>
              </td>
              <td>
                <PlayerCard onPos='LCB' player={ LCBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CB</div>
              </td>
              <td>
                <PlayerCard onPos='GK' player={ GKPlayer } onClick={this.onClick}/>
                <div className='position_tag'>GK</div>
              </td>
              <td>
                <PlayerCard onPos='RCB' player={ RCBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>CB</div>
              </td>
              <td>
                <PlayerCard onPos='RB' player={ RBPlayer } onClick={this.onClick}/>
                <div className='position_tag'>RB</div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );

    return (
      <div className='squad_bg'>
        {showSearch ? (
          <SquadSearchingPlayerContainer
            store={this.props.store}
            onPos={this.state.onPos}
            onClick={this.onClick}/>
        ) : squadLayer}

      </div>

    );
  }
}

export default SquadAddPlayer;
