import SearchingBar from '../components/SearchingBar'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';

const mapStateToProps = (state) => {
    return {
      playerFilters: state.searchingGroupReducer.searchingPlayer,
      positionFilters: state.searchingGroupReducer.searchingPosition,
      nationFilters: state.searchingGroupReducer.searchingNation,
      leagueFilters: state.searchingGroupReducer.searchingLeague,
      clubFilters: state.searchingGroupReducer.searchingClub
    }
}

const SearchingBarContainer = connect(mapStateToProps)(SearchingBar);
export default SearchingBarContainer;
