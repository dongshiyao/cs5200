import PlayerCardsPanel from '../components/PlayerCardsPanel'
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
      showSearch: state.squadReducer.showSearch
    }
}

const PlayerCardsPanelContainer = connect(mapStateToProps)(PlayerCardsPanel);
export default PlayerCardsPanelContainer;
