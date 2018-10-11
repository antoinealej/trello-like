import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { updateCard, deleteCard } from '../../actions/cards';
import './card.css';

const mapDispatchToProps = dispatch => ({
  editCard: card => dispatch(updateCard(card)),
  removeCard: card => dispatch(deleteCard(card)),
});

class Card extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      description: props.description || '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    const { id, title, description } = this.state;
    const { editCard } = this.props;
    editCard({ id, title, description });
  }

  handleDelete() {
    const { removeCard } = this.props;
    const { id } = this.state;
    removeCard({ id });
  }

  render() {
    const { id, title, description } = this.state;
    return (
      <div key={id} className="card">
        <div className="card-title-wrapper">
          <input
            type="text"
            id="title"
            placeholder="Enter a title."
            value={title}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleDelete}>&#10005;</button>
        </div>
        <textarea
          className="card-description"
          id="description"
          placeholder="Write your description here."
          value={description}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  editCard: PropTypes.func.isRequired,
  removeCard: PropTypes.func.isRequired,
};

Card.defaultProps = {
  description: '',
};

export default connect(null, mapDispatchToProps)(Card);
