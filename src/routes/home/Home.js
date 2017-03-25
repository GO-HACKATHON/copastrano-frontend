/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import Button from 'react-bootstrap/lib/Button';
import PageHeader from 'react-bootstrap/lib/PageHeader';
import { fetchAllContainers } from '../../actions/containers';

class Home extends React.Component {
  componentDidMount() {
    this.props.fetchData('http://10.17.10.207:3000/api/v1/deploys/');
  }

  render() {
    return (
      <div>
        <div className="col-lg-12">
          <PageHeader>Dashboard</PageHeader>
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
                { this.props.containers.map((item, i) => (
                  <tr>
                    <td>{ item.id } </td><td>{ item.name } </td>
                    <td><p className="text-success"><strong>{ item.status } </strong></p></td>
                    <td><Button bsStyle="primary"><i className="fa fa-cloud-upload" /> &nbsp;Deploy</Button>&nbsp;<Button bsStyle="primary"><i className="fa fa-history" /> &nbsp;History</Button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  fetchData: PropTypes.func.isRequired,
  containers: PropTypes.arrayOf.isRequired,
};

const mapStateToProps = state => ({
  containers: state.containers,
});

const mapDispatchToProps = dispatch => ({
  fetchData: url => dispatch(fetchAllContainers(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
