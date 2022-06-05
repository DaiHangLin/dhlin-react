import React from '../../../web_modules/react.js';
import './Counter.css.proxy.js';
export const Counter = props => {
  const {
    data,
    doIncreament,
    doDecreament
  } = props;
  return /*#__PURE__*/React.createElement("div", {
    className: "Counter-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "counter-btn",
    onClick: doDecreament
  }, " - "), data, /*#__PURE__*/React.createElement("div", {
    className: "counter-btn",
    onClick: doIncreament
  }, " +  "));
};