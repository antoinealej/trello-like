import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addColumn } from '../../actions/columns';
import ButtonSuccess from '../Common/ButtonSuccess';
import ButtonCancel from '../Common/ButtonCancel';
import './columnform.css';

const mapDispatchToProps = dispatch => ({
  addNewColumn: column => dispatch(addColumn(column)),
});

const defaultState = {
  title: '',
};

class ColumnForm extends Component {
  constructor() {
    super();
    this.state = defaultState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { title } = this.state;
    const { id, addNewColumn } = this.props;
    addNewColumn({
      title,
      id,
    });
    this.resetForm();
  }

  resetForm() {
    this.setState(defaultState);
  }

  render() {
    const { title } = this.state;
    return (
      <form className="column-form" onSubmit={this.handleSubmit}>
        <div>
          <input
            type="text"
            id="title"
            value={title}
            onChange={this.handleChange}
          />
        </div>
        <ButtonSuccess type="submit" content="SAVE" />
        <ButtonCancel content="CANCEL" onClick={this.resetForm} />
      </form>
    );
  }
}

ColumnForm.propTypes = {
  addNewColumn: PropTypes.func.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(ColumnForm);
