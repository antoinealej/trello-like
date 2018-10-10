import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { columnsFetchData } from '../actions/columns';

class ColumnsList extends Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    if (this.props.hasErrored) {
      return <p>Sorry! There was an error loading the columns</p>;
    }

    if (this.props.isLoading) {
      return <p>Loading columns...</p>;
    }

    return (
      <div>
        <div>Columns List</div>
        <ul>
          {this.props.columns.map((columns) => (
            <li key={columns.id}>
              {columns.title}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

ColumnsList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  columns: PropTypes.array.isRequired,
  hasErrored: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    columns: state.columns,
    hasErrored: state.columnsHasErrored,
    isLoading: state.columnsIsLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: () => dispatch(columnsFetchData())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ColumnsList);