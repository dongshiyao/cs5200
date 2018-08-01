import LoginPage from '../components/LoginPage';
import { connect } from 'react-redux';
import * as UserActions from '../redux/user_actions';

const mapStateToProps = (state) => {
    return {
      user: state.userReducer.user
    }
}

const LoginContainer = connect(mapStateToProps)(LoginPage);
export default LoginContainer;
