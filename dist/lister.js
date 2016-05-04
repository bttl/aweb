'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Lister = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Lister = exports.Lister = function (_React$Component) {
  _inherits(Lister, _React$Component);

  function Lister(props) {
    _classCallCheck(this, Lister);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Lister).call(this, props));

    // var dsNew = new ListView.DataSource({
    //   rowHasChanged: (row1, row2) => {
    //     return row1 !== row2;
    //   }
    // }).cloneWithRows(this.props.arr);

    // this.state = {
    //   ds:
    // };
  }

  //  componentWillReceiveProps(nextProps) {
  //   // console.warn('ComponentWillReceiveProps');
  //   this.setState({
  //     ds: this.state.ds.cloneWithRows(nextProps.arr)
  //   });
  // }

  // list-style-type: none
  // margin: 0
  // padding: 0


  _createClass(Lister, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var style = this.props.style || {};

      style.margin = 0;
      style.padding = 0;
      style.listStyleType = 'none';

      var list = _react2.default.DOM.ul({
        style: style
      }, this.props.arr.map(function (row) {
        var itemElem = _this2.props.renderRow(row);

        return _react2.default.DOM.li({
          key: row.id
        }, itemElem);
      }));

      return list;

      // return React.DOM.div({
      //   style: this.props.style,
      //   dataSource: this.state.ds,
      //   renderRow: (row) => this.props.renderRow(row)
      // });
    }
  }]);

  return Lister;
}(_react2.default.Component);

Lister.propTypes = {
  arr: _react2.default.PropTypes.array.isRequired,
  renderRow: _react2.default.PropTypes.func.isRequired
};