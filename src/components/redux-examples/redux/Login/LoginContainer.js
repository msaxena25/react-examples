import { connect } from 'react-redux';
import Login from './Login';

const mapStateToProps = (state) => {
  return {
    loginData: state.login.loginData,
  };
};

/**
 * Write all actions which trigger from Component only
 */
const mapDispatchToProps = (dispatch) => {
  return {};
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;
