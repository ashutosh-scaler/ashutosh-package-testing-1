"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
const MyButton = _ref => {
  let {
    onClick
  } = _ref;
  return /*#__PURE__*/_react.default.createElement("button", {
    onClick: onClick
  }, "Click Me!");
};
var _default = exports.default = MyButton;