import MainPage from '../MainPage';
import { connect } from 'react-redux';
import * as UserActions from '../redux/user_actions';

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user,
      pageContent: state.userReducer.pageContent
    }
}

const MainPageContainer = connect(mapStateToProps)(MainPage);
export default MainPageContainer;
