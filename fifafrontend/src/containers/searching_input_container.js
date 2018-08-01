import SearchingInput from '../components/SearchingInput';
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';

const mapStateToProps = (state) => {
    return { }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addSearchingPlayer: input => {
            dispatch(SearchingActions.addSearchingPlayer(input));
        },
        removeSearchingPlayer: input => {
            dispatch(SearchingActions.removeSearchingPlayer(input));
        }
    };
};

const SearchingInputContainer = connect(mapStateToProps,mapDispatchToProps)(SearchingInput);
export default SearchingInputContainer;
