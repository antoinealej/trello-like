import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Card from '../Cards/Card';
import CardForm from '../Cards/CardForm';
import { updateColumn, deleteColumn } from '../../actions/columns';
import './column.css';

const mapDispatchToProps = dispatch => ({
  editColumn: column => dispatch(updateColumn(column)),
  removeColumn: column => dispatch(deleteColumn(column)),
});

class Column extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      id: props.id,
      title: props.title,
      displayForm: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    const { id, title } = this.state;
    const { editColumn } = this.props;
    editColumn({ id, title });
  }

  handleDelete() {
    const { removeColumn } = this.props;
    const { id } = this.state;
    removeColumn({ id });
  }

  render() {
    const {
      id,
      cards,
      cardsCount,
    } = this.props;
    const { title } = this.state;
    const { displayForm } = this.state;
    return (
      <div key={id} className="column">
        <div className="column-title-wrapper">
          <input
            type="text"
            id="title"
            placeholder="Enter a title."
            value={title}
            onChange={this.handleChange}
          />
          <button type="button" onClick={this.handleDelete}>&#10005;</button>
        </div>
        <div className="column-cards">
          {
            cards.map(card => (
              <Card
                key={card.id}
                id={card.id}
                title={card.title}
                description={card.description}
              />
            ))
          }
        </div>
        { !displayForm
          && (
          <button
            type="button"
            className="column-add-card"
            onClick={() => this.setState({ displayForm: true })}
            onKeyPress={() => this.setState({ displayForm: true })}
          >
            + Add another card
          </button>
          )
        }
        {
          displayForm
          && (
            <CardForm
              columnId={id}
              id={cardsCount + 1}
              resetForm={() => this.setState({ displayForm: false })}
            />
          )
        }
      </div>
    );
  }
}

Column.propTypes = {
  id: PropTypes.number.isRequired,
  cardsCount: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  editColumn: PropTypes.func.isRequired,
  removeColumn: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Column);
