webpackHotUpdate(0,{

/***/ 380:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Counter = undefined;

var _index = __webpack_require__(149);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(121);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(7);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(122);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _style = __webpack_require__(381);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Counter: {
    displayName: 'Counter'
  }
};

var _UsersEvSrcDevPiqueSiteNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/dev/pique-site/app/containers/Home/Counter/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcDevPiqueSiteNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/dev/pique-site/app/containers/Home/Counter/index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcDevPiqueSiteNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcDevPiqueSiteNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Counter = exports.Counter = _wrapComponent('Counter')(function (_Component) {
  _inherits(Counter, _Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      counter: 0,
      total: 37172
    };
    _this.increment = _this.increment.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.increment();
    }
  }, {
    key: 'increment',
    value: function increment() {
      if (this.state.counter < this.state.total) {
        var amount = this.state.counter + 50;
        this.setState({
          counter: amount,
          num: amount.toString()
        });
        setTimeout(this.increment, 200);
      } else if (this.state.counter >= this.state.total) {
        var _amount = this.state.total;
        this.setState({
          counter: _amount,
          num: _amount.toString()
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        { className: _style2.default.root },
        _react3.default.createElement(
          'h3',
          { className: _style2.default.title },
          'Rising Tuition. Rising Debt.'
        ),
        _react3.default.createElement(
          'h2',
          { className: _style2.default.price },
          '$',
          this.state.num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
        ),
        _react3.default.createElement(
          'h6',
          { className: _style2.default.label },
          'Average Amount Borrowed by Graduates in 2016'
        )
      );
    }
  }]);

  return Counter;
}(_react2.Component));

exports.default = Counter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanM/NzRjYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsInRvdGFsIiwiaW5jcmVtZW50IiwiYmluZCIsImFtb3VudCIsInNldFN0YXRlIiwibnVtIiwidG9TdHJpbmciLCJzZXRUaW1lb3V0Iiwicm9vdCIsInRpdGxlIiwicHJpY2UiLCJyZXBsYWNlIiwibGFiZWwiLCJDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsbUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsQ0FERTtBQUVYQyxhQUFPO0FBRkksS0FBYjtBQUlBLFVBQUtDLFNBQUwsR0FBaUIsTUFBS0EsU0FBTCxDQUFlQyxJQUFmLE9BQWpCO0FBUGlCO0FBUWxCOzs7O3dDQUVtQjtBQUNsQixXQUFLRCxTQUFMO0FBQ0Q7OztnQ0FFVztBQUNWLFVBQUksS0FBS0gsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLEtBQUtELEtBQUwsQ0FBV0UsS0FBcEMsRUFBMkM7QUFDekMsWUFBTUcsU0FBUyxLQUFLTCxLQUFMLENBQVdDLE9BQVgsR0FBcUIsRUFBcEM7QUFDQSxhQUFLSyxRQUFMLENBQWM7QUFDWkwsbUJBQVNJLE1BREc7QUFFWkUsZUFBS0YsT0FBT0csUUFBUDtBQUZPLFNBQWQ7QUFJQUMsbUJBQVcsS0FBS04sU0FBaEIsRUFBMkIsR0FBM0I7QUFDRCxPQVBELE1BT08sSUFBSSxLQUFLSCxLQUFMLENBQVdDLE9BQVgsSUFBc0IsS0FBS0QsS0FBTCxDQUFXRSxLQUFyQyxFQUE0QztBQUNqRCxZQUFNRyxVQUFTLEtBQUtMLEtBQUwsQ0FBV0UsS0FBMUI7QUFDQSxhQUFLSSxRQUFMLENBQWM7QUFDWkwsbUJBQVNJLE9BREc7QUFFWkUsZUFBS0YsUUFBT0csUUFBUDtBQUZPLFNBQWQ7QUFJRDtBQUNGOzs7NkJBQ1E7QUFDUCxhQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlFLElBQXBCO0FBQ0U7QUFBQTtBQUFBLFlBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFBQTtBQUFBLFNBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxXQUFXLGdCQUFJQyxLQUFuQjtBQUFBO0FBQTRCLGVBQUtaLEtBQUwsQ0FBV08sR0FBWCxDQUFlTSxPQUFmLENBQXVCLGNBQXZCLEVBQXVDLE9BQU8sR0FBUCxHQUFhLElBQXBEO0FBQTVCLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBSSxXQUFXLGdCQUFJQyxLQUFuQjtBQUFBO0FBQUE7QUFIRixPQURGO0FBT0Q7Ozs7OztrQkFHWUMsTyIsImZpbGUiOiIwLjdkMTJiNzMyMjAzNWZjMmRmMGRhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5leHBvcnQgY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnRlcjogMCxcbiAgICAgIHRvdGFsOiAzNzE3MixcbiAgICB9XG4gICAgdGhpcy5pbmNyZW1lbnQgPSB0aGlzLmluY3JlbWVudC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmluY3JlbWVudCgpXG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgaWYgKHRoaXMuc3RhdGUuY291bnRlciA8IHRoaXMuc3RhdGUudG90YWwpIHtcbiAgICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuc3RhdGUuY291bnRlciArIDUwXG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY291bnRlcjogYW1vdW50LFxuICAgICAgICBudW06IGFtb3VudC50b1N0cmluZygpXG4gICAgICB9KVxuICAgICAgc2V0VGltZW91dCh0aGlzLmluY3JlbWVudCwgMjAwKVxuICAgIH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5jb3VudGVyID49IHRoaXMuc3RhdGUudG90YWwpIHtcbiAgICAgIGNvbnN0IGFtb3VudCA9IHRoaXMuc3RhdGUudG90YWxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICBjb3VudGVyOiBhbW91bnQsXG4gICAgICAgIG51bTogYW1vdW50LnRvU3RyaW5nKClcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y3NzLnRpdGxlfT5SaXNpbmcgVHVpdGlvbi4gUmlzaW5nIERlYnQuPC9oMz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y3NzLnByaWNlfT4ke3RoaXMuc3RhdGUubnVtLnJlcGxhY2UoLyhcXGQrKShcXGR7M30pLywgJyQxJyArICcsJyArICckMicpfTwvaDI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9e2Nzcy5sYWJlbH0+QXZlcmFnZSBBbW91bnQgQm9ycm93ZWQgYnkgR3JhZHVhdGVzIGluIDIwMTY8L2g2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9