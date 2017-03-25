/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="col-lg-12">
          <PageHeader>Deployment</PageHeader>
        </div>

        <div className="col-md-12">
          <Button bsStyle="success"><i className="fa fa-plus" /> &nbsp;New</Button>
        </div>

        <div className="col-lg-12">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr><th># </th><th>Docker Name </th><th>Status </th><th>Action</th></tr>
              </thead>
              <tbody>
                <tr><td>1 </td><td>API 1 </td><td><p className="text-success"><strong>Deployed </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
                <tr><td>2 </td><td>API 2 </td><td><p className="text-warning"><strong>On Progress </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
                <tr><td>3 </td><td>WEB 1 </td><td><p className="text-success"><strong>Deployed </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
                <tr><td>4 </td><td>WEB 2 </td><td><p className="text-danger"><strong>Failed </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
                <tr><td>5 </td><td>DB 1 </td><td><p className="text-success"><strong>Deployed </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
                <tr><td>6 </td><td>DB 2 </td><td><p className="text-success"><strong>Deployed </strong></p></td><td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button><br /><Button bsStyle="danger"><i className="fa fa-trash-o" /> &nbsp;Delete</Button></td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
