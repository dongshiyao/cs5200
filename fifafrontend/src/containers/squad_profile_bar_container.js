import SquadProfileBar from '../components/SquadProfileBar'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';
import * as SquadActions from '../redux/squad_actions';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    formation: state.squadReducer.formation,
    squad: state.squadReducer.squad
  }
}

const SquadProfileBarContainer = connect(mapStateToProps)(SquadProfileBar);
export default SquadProfileBarContainer;
