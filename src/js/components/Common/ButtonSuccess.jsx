import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class ButtonSuccess extends PureComponent {
  render() {
    const { props } = this;
    return (
      <button type="button" className="button-success" {...props}>{props.content}</button>
    );
  }
}
ButtonSuccess.propTypes = {
  content: PropTypes.string.isRequired,
};
