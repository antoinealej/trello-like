import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { columnsFetchData } from '../actions/columns';

class ColumnsList extends Component {
  componentDidMount() {
    const { fetchData } = this.props;
    fetchData();
  }

  render() {
    const { hasErrored, isLoading, columns } = this.props;
    if (hasErrored) {
      return <p>Sorry! There was an error loading the columns</p>;
    }

    if (isLoading) {
      return <p>Loading columns...</p>;
    }

    return (
      <div>
        <div>Columns List</div>
        <ul>
          {columns.map(column => (
            <li key={column.id}>
              {column.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ColumnsList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  columns: state.columns,
  hasErrored: state.columnsHasErrored,
  isLoading: state.columnsIsLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchData: () => dispatch(columnsFetchData()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsList);
