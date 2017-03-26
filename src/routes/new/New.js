import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import {
  Button,
  PageHeader,
  ControlLabel,
  FormControl,
  FormGroup,
  Form } from 'react-bootstrap';
import FormControlFeedback from 'react-bootstrap/lib/FormControlFeedback';
import { postConfig } from '../../actions/config';

class New extends React.Component {
  constructor() {
    super();
    this.state = { gitUrl: '', file: '' };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    e.preventDefault();

    const target = e.target;
    const value = target.value;

    this.setState({ gitUrl: value });
  }

  onFileChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const yml = e.target.files[0];

    reader.onloadend = () => {
      this.setState({ file: reader.result });
    };

    reader.readAsText(yml);

    // this.setState({ file: e.target.files[0] });
  }

  onSubmit(e) {
    e.preventDefault();
    this.props.postConfig('http://10.17.10.207:5000/api/v1/deploys/initial', this.state.gitUrl, this.state.file);
  }

  render() {
    return (
      <div>
        <div>
          <div className="col-lg-12">
            <PageHeader>Config</PageHeader>
          </div>
        </div>

        <div>
          <div className="col-lg-12">
            <Form onSubmit={e => this.onSubmit(e)}>
              <FormGroup controlId="formBasicText">
                <ControlLabel>Git URL</ControlLabel>
                <FormControl name="gitUrl" type="text" onChange={this.onChange} placeholder="Enter Your Git URL Here" required autoFocus />
                <FormControlFeedback />
              </FormGroup>

              <FormGroup controlId="formBasicFile">
                <ControlLabel>YAML File</ControlLabel>
                <FormControl name="file" type="file" onFileChange={this.onFileChange} required />
                <FormControlFeedback />
              </FormGroup>

              <FormGroup>
                <Button type="submit" bsStyle="primary">Submit Button</Button>
                {'  '}
                <Button type="reset">Reset Button</Button>
              </FormGroup>
            </Form>
          </div>
        </div>

        { this.props.config.message !== '' ? (
          <div className="col-lg-12">
            <h5>Message from API:</h5>
            <p>{ this.props.config.message }</p>
          </div>) : '' }
      </div>
    );
  }
}

New.propTypes = {
  postConfig: PropTypes.func.isRequired,
  config: PropTypes.objectOf.isRequired,
};

const mapStateToProps = state => ({
  config: state.config,
});

const mapDispatchToProps = dispatch => ({
  postConfig: (url, gitUrl, file) => dispatch(postConfig(url, gitUrl, file)),
});

export default connect(mapStateToProps, mapDispatchToProps)(New);
