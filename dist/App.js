"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _logo = _interopRequireDefault(require("./logo.svg"));
require("./App.css");
var _MyComponent = _interopRequireDefault(require("./components/MyComponent"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function App() {
  return /*#__PURE__*/React.createElement("div", {
    className: "App"
  }, /*#__PURE__*/React.createElement("header", {
    className: "App-header"
  }, /*#__PURE__*/React.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), /*#__PURE__*/React.createElement(_MyComponent.default, {
    label: "hello Hi"
  })));
}
var _default = exports.default = App;