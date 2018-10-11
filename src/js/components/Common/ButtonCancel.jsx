import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export default class ButtonCancel extends PureComponent {
  render() {
    const { props } = this;
    return (
      <button type="button" className="button-cancel" {...props}>{props.content}</button>
    );
  }
}
ButtonCancel.propTypes = {
  content: PropTypes.string.isRequired,
};
