import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { GetUsers } from '../redux/actions/users.action';

function Users({ userData, GetUsers }) {
  useEffect(() => {
    GetUsers();
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div class='row'>
        <div class='col-sm-12 btn btn-info'>How to Build an Application Using React Js and Redux</div>
      </div>
      <table class='table'>
        <thead class='thead-dark'>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Username</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Website</th>
          </tr>
        </thead>
        <tbody>
          {userData.users.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>{item.phone}</td>
                <td>{item.website}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    GetUsers: () => dispatch(GetUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
