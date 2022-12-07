import React, { Fragment, useState } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import { Avatar, Layout, Menu, Popover } from 'antd';
import './index.css';
import Layouts from './layout';

function App() {

  return (
    <Fragment>
      <BrowserRouter>
        <Layouts />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
