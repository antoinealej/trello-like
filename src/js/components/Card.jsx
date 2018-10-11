import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './card.css';

export default class Card extends PureComponent {
  render() {
    const { id, title, description } = this.props;
    return (
      <div key={id} className="card">
        <div className="card-title">{title}</div>
        <div className="card-description">{description}</div>
      </div>
    );
  }
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};
