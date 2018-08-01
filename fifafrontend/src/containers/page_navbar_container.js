import PageNavbar from '../components/PageNavbar';
import { connect } from 'react-redux';
import * as UserActions from '../redux/user_actions';

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
}

const PageNavbarContainer = connect(mapStateToProps)(PageNavbar);
export default PageNavbarContainer;
