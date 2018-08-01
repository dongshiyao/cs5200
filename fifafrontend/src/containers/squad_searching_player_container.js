import SquadSearchingPlayer from '../components/SquadSearchingPlayer'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';

const mapStateToProps = (state) => {
    return {
      playerResults: state.searchingGroupReducer.playerResults
    }
}

const SquadSearchingPlayerContainer = connect(mapStateToProps)(SquadSearchingPlayer);
export default SquadSearchingPlayerContainer;
