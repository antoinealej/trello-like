import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardsFetchData } from '../actions/cards';

class CardsList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { hasErrored, isLoading, cards } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the cards</p>;
    }

    if (isLoading) {
      return <p>Loading cards...</p>;
    }

    return (
      <div>
        <div>Cards List</div>
        <ul>
          {cards.map(card => (
            <li key={card.id}>
              {card.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CardsList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  cards: state.cards,
  hasErrored: state.cardsHasErrored,
  isLoading: state.cardsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(cardsFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);
