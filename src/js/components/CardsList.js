import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { cardsFetchData } from '../actions/cards';

class CardsList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the cards</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading cards...</p>;
    }

    return (
      <div>
        <div>Cards List</div>
        <ul>
          {this.props.cards.map((cards) => (
            <li key={cards.id}>
              {cards.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

CardsList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  cards: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    cards: state.cards,
    hasErrored: state.cardsHasErrored,
    isLoading: state.cardsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(cardsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CardsList);