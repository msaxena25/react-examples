import React, { useState } from 'react';

const SignUp = (props) => {
  const formValues = {
    name: '',
    company: '',
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

  const onSignUp = () => {
    props.saveLogin(values);
   console.log(props.loginData)
  };

  return (
    <>
      <div className='container h-100'>
        <div className='row h-100'>
          <div className='col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100'>
            <div className='d-table-cell align-middle'>
              <div className='text-center mt-4'>
                <h1 className='h2'>Get started</h1>
                <p className='lead'>Start creating the best possible user experience for you customers.</p>
              </div>

              <div className='card'>
                <div className='card-body'>
                  <div className='m-sm-4'>
                    <form>
                      <div className='form-group'>
                        <label>Name</label>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          name='name'
                          placeholder='Enter your name'
                          onChange={handleChange}
                          value={values.name}
                        />
                      </div>
                      <div className='form-group'>
                        <label>Company</label>
                        <input
                          className='form-control form-control-lg'
                          type='text'
                          name='company'
                          onChange={handleChange}
                          value={values.company}
                          placeholder='Enter your company name'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Username</label>
                        <input
                          className='form-control form-control-lg'
                          type='email'
                          name='userName'
                          onChange={handleChange}
                          value={values.userName}
                          placeholder='Enter your Username'
                        />
                      </div>
                      <div className='form-group'>
                        <label>Password</label>
                        <input
                          className='form-control form-control-lg'
                          type='password'
                          name='password'
                          onChange={handleChange}
                          value={values.password}
                          placeholder='Enter password'
                        />
                      </div>
                      <div className='text-center mt-3'>
                        <a className='btn btn-lg btn-primary' onClick={onSignUp}>
                          Sign up
                        </a>
                      </div>
                    </form>
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
export default SignUp;
