import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from '../Cards/Card';
import CardForm from '../Cards/CardForm';
import './column.css';

export default class Column extends PureComponent {
  constructor() {
    super();
    this.state = {
      displayForm: false,
    };
  }

  render() {
    const {
      id,
      title,
      cards,
      cardsCount,
    } = this.props;
    const { displayForm } = this.state;
    return (
      <div key={id} className="column">
        <div className="column-title">{title}</div>
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
};
