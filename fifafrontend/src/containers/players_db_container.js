import PlayersDB from '../components/PlayersDB'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';

const mapStateToProps = (state) => {
    return {
      playerResults: state.searchingGroupReducer.playerResults
    }
}

const PlayersDBContainer = connect(mapStateToProps)(PlayersDB);
export default PlayersDBContainer;
