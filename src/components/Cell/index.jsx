/*
  eslint-disable
  react/no-danger,
  jsx-a11y/click-events-have-key-events,
  jsx-a11y/no-static-element-interactions
*/

import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Cell = props => (
  <div className="cell" onClick={props.onClick}>
    {props.alive &&
      <span
        className="cell__emoji"
        dangerouslySetInnerHTML={{ __html: props.emoji }}
      />
    }
  </div>
);

Cell.propTypes = {
  onClick: PropTypes.func.isRequired,
  alive: PropTypes.bool,
  emoji: PropTypes.node.isRequired,
};

Cell.defaultProps = {
  alive: false,
};

export default Cell;
