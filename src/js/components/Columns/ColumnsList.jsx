import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { columnsFetchData } from '../../actions/columns';
import { cardsFetchData } from '../../actions/cards';
import Column from './Column';
import './columnslist.css';

class ColumnsList extends Component {
  componentDidMount() {
    const { fetchColumns, fetchCards } = this.props;
    fetchColumns();
    fetchCards();
  }

  render() {
    const {
      columns,
      columnsHasErrored,
      columnsIsLoading,
      cards,
      cardsHasErrored,
      cardsIsLoading,
    } = this.props;

    if (columnsHasErrored || cardsHasErrored) {
      return <p>Sorry! There was an error loading the data</p>;
    }

    if (columnsIsLoading || cardsIsLoading) {
      return <p>Loading...</p>;
    }

    return (
      <div>
        <div className="columns-wrapper">
          {columns.map(column => (
            <Column
              key={column.id}
              id={column.id}
              title={column.title}
              cards={cards.filter(card => card.columnId === column.id)}
              cardsCount={cards.length}
            />
          ))}
        </div>
      </div>
    );
  }
}

ColumnsList.propTypes = {
  fetchColumns: PropTypes.func.isRequired,
  fetchCards: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  columnsHasErrored: PropTypes.bool.isRequired,
  columnsIsLoading: PropTypes.bool.isRequired,
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  cardsHasErrored: PropTypes.bool.isRequired,
  cardsIsLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  columns: state.columns,
  columnsHasErrored: state.columnsHasErrored,
  columnsIsLoading: state.columnsIsLoading,
  cards: state.cards,
  cardsHasErrored: state.cardsHasErrored,
  cardsIsLoading: state.cardsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchColumns: () => dispatch(columnsFetchData()),
  fetchCards: () => dispatch(cardsFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsList);
