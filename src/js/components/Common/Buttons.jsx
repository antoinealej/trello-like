import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './button.css';

export class ButtonSuccess extends PureComponent {
  render() {
    const { props } = this;
    return (
      <button className="button-success" { ...props }>{props.content}</button>
    );
  }
}
ButtonSuccess.propTypes = {
  content: PropTypes.string.isRequired,
};

export class ButtonCancel extends PureComponent {
  render() {
    const { props } = this;
    return (
      <button className="button-cancel" { ...props }>{props.content}</button>
    );
  }
}
ButtonCancel.propTypes = {
  content: PropTypes.string.isRequired,
};
