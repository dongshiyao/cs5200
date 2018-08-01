import SearchingDropdown from '../components/SearchingDropdown';
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addSearchingPosition: input => {
          dispatch(SearchingActions.addSearchingPosition(input));
      },
      removeSearchingPosition: input => {
          dispatch(SearchingActions.removeSearchingPosition(input));
      },
      addSearchingNation: input => {
          dispatch(SearchingActions.addSearchingNation(input));
      },
      removeSearchingNation: input => {
          dispatch(SearchingActions.removeSearchingNation(input));
      },
      addSearchingLeague: input => {
          dispatch(SearchingActions.addSearchingLeague(input));
      },
      removeSearchingLeague: input => {
          dispatch(SearchingActions.removeSearchingLeague(input));
      },
      addSearchingClub: input => {
          dispatch(SearchingActions.addSearchingClub(input));
      },
      removeSearchingClub: input => {
          dispatch(SearchingActions.removeSearchingClub(input));
      }
    };
};

const SearchingDropdownContainer = connect(mapStateToProps,mapDispatchToProps)(SearchingDropdown);
export default SearchingDropdownContainer;
