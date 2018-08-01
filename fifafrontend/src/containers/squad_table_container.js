import SquadsTable from '../components/SquadsTable'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';
import * as SquadActions from '../redux/squad_actions';

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user
  }
}

const SquadTableContainer = connect(mapStateToProps)(SquadsTable);
export default SquadTableContainer;
