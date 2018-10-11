import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import './column.css';

export default class Column extends PureComponent {
  render() {
    const { id, title, cards } = this.props;
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
      </div>
    );
  }
}

Column.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
};
