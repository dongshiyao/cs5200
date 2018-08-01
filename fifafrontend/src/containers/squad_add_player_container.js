import SquadAddPlayer from '../components/SquadAddPlayer'
import { connect } from 'react-redux';
import * as SearchingActions from '../redux/searching_actions';
import * as SquadActions from '../redux/squad_actions';

const mapStateToProps = (state) => {
    return {
      squad: state.squadReducer.squad,
      showSearch: state.squadReducer.showSearch,
      GKPlayer: state.squadReducer.GKPlayer,
    	STPlayer: state.squadReducer.STPlayer,
      CFPlayer: state.squadReducer.CFPlayer,
    	LMPlayer: state.squadReducer.LMPlayer,
    	LCMPlayer: state.squadReducer.LCMPlayer,
      RCMPlayer: state.squadReducer.RCMPlayer,
      RMPlayer: state.squadReducer.RMPlayer,
      LBPlayer: state.squadReducer.LBPlayer,
      LCBPlayer: state.squadReducer.LCBPlayer,
      RCBPlayer: state.squadReducer.RCBPlayer,
      RBPlayer: state.squadReducer.RBPlayer
    }
}

const SquadAddPlayerContainer = connect(mapStateToProps)(SquadAddPlayer);
export default SquadAddPlayerContainer;
