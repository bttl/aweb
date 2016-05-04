'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Btn = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Btn = exports.Btn = function (_React$Component) {
  _inherits(Btn, _React$Component);

  function Btn() {
    _classCallCheck(this, Btn);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Btn).apply(this, arguments));
  }

  _createClass(Btn, [{
    key: 'render',

    // constructor(props){
    //     super(props);
    // }

    value: function render() {
      var _this2 = this;

      var style = this.props.style || {};

      style.cursor = 'pointer';
      style.backgroundColor = style.backgroundColor || '#eee';

      var opts = {
        // onPress for mobiles
        onClick: function onClick(e) {
          _this2.props.onClick(e);
        },
        style: style,
        children: this.props.children
      };

      if (this.props.underlayColor) {
        opts.onMouseEnter = function (e) {
          e.target.style.backgroundColor = _this2.props.underlayColor;
        };

        opts.onMouseLeave = function (e) {
          e.target.style.backgroundColor = style.backgroundColor;
        };
      }

      return _react2.default.DOM.button(opts);
    }
  }]);

  return Btn;
}(_react2.default.Component);

Btn.propTypes = {
  onClick: _react2.default.PropTypes.func.isRequired
};