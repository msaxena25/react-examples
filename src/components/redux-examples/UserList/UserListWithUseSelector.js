import React, { useEffect } from 'react';
import { GetUsers } from '../redux/actions/users.action';
import { useSelector, useDispatch } from 'react-redux';

function UsersListWithSelector() {
const userData = useSelector((state) => state.user)
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetUsers());
  }, []);

  return userData.loading ? (
    <h2>Loading</h2>
  ) : userData.error ? (
    <h2>{userData.error}</h2>
  ) : (
    <div>
      <div className='row'>
        <div className='col-sm-12 btn btn-info'>How to Build an Application Using React Js and Redux</div>
      </div>
      <table className='table'>
        <thead className='thead-dark'>
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
              <tr data-testid="userlist-tr" key={item.id}>
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

export default UsersListWithSelector;
