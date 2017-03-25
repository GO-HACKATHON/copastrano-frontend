/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import { NavDropdown, MenuItem } from 'react-bootstrap';
import Navbar, { Brand } from 'react-bootstrap/lib/Navbar';

class Header extends React.Component {
  render() {
    return (
      <div id="wrapper" className="content">
        <Navbar fluid style={{ margin: 0 }}>
          <Brand>
            <span>&nbsp;Admin Dashboard</span>
            <button type="button" className="navbar-toggle" style={{ position: 'absolute', right: 0, top: 0 }}>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </Brand>
          <ul className="nav navbar-top-links navbar-right">
            <NavDropdown title={<i className="fa fa-user fa-fw" />} id="navDropdown">
              <MenuItem eventKey="1">
                <span><i className="fa fa-sign-out fa-fw" /> Logout </span>
              </MenuItem>
            </NavDropdown>
          </ul>
        </Navbar>
      </div>
    );
  }
}

export default Header;
