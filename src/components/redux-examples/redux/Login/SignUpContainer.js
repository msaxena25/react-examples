import { connect } from 'react-redux';
import { getLogin, saveLogin } from '../actions/login.action';
import SignUp from './SignUp';

// This is blank because we don't need any data for signup page
const mapStateToProps = (state) => {
    console.log(state)
    return {
        loginData: state.login.loginData,
      };
};

/**
 * Write all actions which trigger from Component only
 */
const mapDispatchToProps = (dispatch) => {
  return {
      saveLogin:  (formData) => dispatch(saveLogin(formData)),
      getLogin:  () => dispatch(getLogin())
  }
};

const SignUpContainer = connect(mapStateToProps, mapDispatchToProps)(SignUp);

export default SignUpContainer;
