import React, { Fragment } from 'react'
import AddProduct from '../../components/addProduct';
import ListProduct from '../../components/listProduct';

const Home = () => {
  return (
    <Fragment>
        <AddProduct />
        <ListProduct />
    </Fragment>
  );
}

export default Home