import React, { Fragment } from 'react'
import AddUser from '../../components/addUser';
import ListUser from '../../components/listUser';

const User = () => {
  return (
    <Fragment>
        <AddUser />
        <ListUser />
    </Fragment>
  )
}

export default User;