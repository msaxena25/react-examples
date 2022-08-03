import React, { useState } from 'react';

const Login = (props) => {
  const loginData = props.loginData;
  const formValues = {
    userName: '',
    password: '',
  };
  const [values, setValues] = useState(formValues);

  /**
   * Form field on change event
   */
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  /**
   * Match Login credentials with saved login info data inside State
   * If login correct then redirect to other component
   * Else show alert message
   */
  const onLogin = () => {
    if (!values.userName || !values.password) {
      alert('Please enter Username & password');
    } else {
      if (values.userName === loginData.userName && values.password === loginData.password) {
        alert('Login success');
        props.history.push('/centreslist');
      } else {
        alert('Incorrect Username or Password');
      }
    }
  };
  return (
    <>
      <br />
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-8'>
            <div className='card-group mb-0'>
              <div className='card p-4'>
                <div className='card-body'>
                  <h1>Login</h1>
                  <p className='text-muted'>Sign In to your account</p>
                  <div className='input-group mb-3'>
                    <span className='input-group-addon'>
                      <i className='fa fa-user'></i>
                    </span>
                    <input
                    data-testid="username"
                      type='text'
                      name='userName'
                      className='form-control'
                      placeholder='Username'
                      onChange={handleChange}
                      value={values.userName}
                    />
                  </div>
                  <div className='input-group mb-4'>
                    <span className='input-group-addon'>
                      <i className='fa fa-lock'></i>
                    </span>
                    <input
                      type='password'
                      name='password'
                      className='form-control'
                      placeholder='Password'
                      onChange={handleChange}
                      value={values.password}
                    />
                  </div>
                  <div className='row'>
                    <div className='col-6'>
                      <button data-testid='loginBtn' type='button' className='btn btn-primary px-4' onClick={onLogin}>
                        Login
                      </button>
                    </div>
                    <div className='col-6 text-right'>
                      <button type='button' className='btn btn-link px-0'>
                        Forgot password?
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card text-white bg-primary py-5 d-md-down-none'>
                <div className='card-body text-center'>
                  <div>
                    <h2>Sign up</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua.
                    </p>
                    <button type='button' className='btn btn-primary active mt-3'>
                      Register Now!
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
