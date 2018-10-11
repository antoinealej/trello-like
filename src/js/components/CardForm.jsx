import React, { Component } from "react";
import { connect } from "react-redux";
import { addCard } from "../actions/cards";
import { ButtonSuccess, ButtonCancel } from './Common/Buttons';
import './cardform.css';
import PropTypes from "prop-types";

const mapDispatchToProps = dispatch => {
  return {
    addCard: card => dispatch(addCard(card))
  };
};

const defaultState = {
  title: "",
  description: "",
};

class CardForm extends Component {
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
    const { title, description } = this.state;
    const { columnId, id } = this.props;
    this.props.addCard({ title, id, description, columnId });
    this.resetForm();
  }

  resetForm() {
    this.setState(defaultState);
    this.props.resetForm();
  }

  render() {
    const { title } = this.state;
    return (
      <form className="card-form" onSubmit={this.handleSubmit}>
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

CardForm.propTypes = {
  resetForm: PropTypes.func.isRequired,
  columnId: PropTypes.number.isRequired,
  id: PropTypes.number.isRequired,
};

export default connect(null, mapDispatchToProps)(CardForm);