import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getUsersSuccess } from '../redux/actions/users.action';

const OtherUser = (props) => {
  return (
    <>
      <h4>Getting data from state that is created by Other Component Users</h4>
      <h6>{props.user.length}</h6>
      {props.user.map((item) => {
        return <p key={item.id}> {item.name}</p>;
      })}
    </>
  );
};

const mapStateToProps = (state) => {
  console.log('Data', state.user);
  return {
    user: state.user.users,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUsersSuccess: () => dispatch(getUsersSuccess()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(OtherUser);
