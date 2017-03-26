/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Navbar, { Brand } from 'react-bootstrap/lib/Navbar';

class Header extends React.Component {
  render() {
    return (
      <div id="wrapper" className="content">
        <Navbar fluid style={{ margin: 0 }}>
          <Brand>
            <span>&nbsp;Admin Dashboard</span>
          </Brand>
        </Navbar>
      </div>
    );
  }
}

export default Header;
