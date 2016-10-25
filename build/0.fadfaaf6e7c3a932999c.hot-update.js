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
      total: 37172,
      num: ''
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
      var _state = this.state;
      var counter = _state.counter;
      var total = _state.total;

      if (counter < total) {
        var amount = counter + 102;
        this.setState({ counter: amount, num: amount.toString() });
        setTimeout(this.increment, 10);
      } else if (counter >= total) {
        var _amount = total;
        this.setState({ counter: _amount, num: _amount.toString() });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanM/NzRjYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsInRvdGFsIiwibnVtIiwiaW5jcmVtZW50IiwiYmluZCIsImFtb3VudCIsInNldFN0YXRlIiwidG9TdHJpbmciLCJzZXRUaW1lb3V0Iiwicm9vdCIsInRpdGxlIiwicHJpY2UiLCJyZXBsYWNlIiwibGFiZWwiLCJDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsbUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsQ0FERTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsV0FBSztBQUhNLEtBQWI7QUFLQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQVJpQjtBQVNsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsU0FBTDtBQUNEOzs7Z0NBRVc7QUFBQSxtQkFDaUIsS0FBS0osS0FEdEI7QUFBQSxVQUNGQyxPQURFLFVBQ0ZBLE9BREU7QUFBQSxVQUNPQyxLQURQLFVBQ09BLEtBRFA7O0FBRVYsVUFBSUQsVUFBVUMsS0FBZCxFQUFxQjtBQUNuQixZQUFNSSxTQUFTTCxVQUFVLEdBQXpCO0FBQ0EsYUFBS00sUUFBTCxDQUFjLEVBQUNOLFNBQVNLLE1BQVYsRUFBa0JILEtBQUtHLE9BQU9FLFFBQVAsRUFBdkIsRUFBZDtBQUNBQyxtQkFBVyxLQUFLTCxTQUFoQixFQUEyQixFQUEzQjtBQUNELE9BSkQsTUFJTyxJQUFJSCxXQUFXQyxLQUFmLEVBQXNCO0FBQzNCLFlBQU1JLFVBQVNKLEtBQWY7QUFDQSxhQUFLSyxRQUFMLENBQWMsRUFBQ04sU0FBU0ssT0FBVixFQUFrQkgsS0FBS0csUUFBT0UsUUFBUCxFQUF2QixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJRSxJQUFwQjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVcsZ0JBQUlDLEtBQW5CO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFBQTtBQUE0QixlQUFLWixLQUFMLENBQVdHLEdBQVgsQ0FBZVUsT0FBZixDQUF1QixjQUF2QixFQUF1QyxPQUFPLEdBQVAsR0FBYSxJQUFwRDtBQUE1QixTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFBQTtBQUFBO0FBSEYsT0FERjtBQU9EOzs7Ozs7a0JBR1lDLE8iLCJmaWxlIjoiMC5mYWRmYWFmNmU3YzNhOTMyOTk5Yy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuZXhwb3J0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICB0b3RhbDogMzcxNzIsXG4gICAgICBudW06ICcnLFxuICAgIH1cbiAgICB0aGlzLmluY3JlbWVudCA9IHRoaXMuaW5jcmVtZW50LmJpbmQodGhpcylcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHRoaXMuaW5jcmVtZW50KClcbiAgfVxuXG4gIGluY3JlbWVudCgpIHtcbiAgICBjb25zdCB7IGNvdW50ZXIsIHRvdGFsIH0gPSB0aGlzLnN0YXRlXG4gICAgaWYgKGNvdW50ZXIgPCB0b3RhbCkge1xuICAgICAgY29uc3QgYW1vdW50ID0gY291bnRlciArIDEwMlxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogYW1vdW50LCBudW06IGFtb3VudC50b1N0cmluZygpfSlcbiAgICAgIHNldFRpbWVvdXQodGhpcy5pbmNyZW1lbnQsIDEwKVxuICAgIH0gZWxzZSBpZiAoY291bnRlciA+PSB0b3RhbCkge1xuICAgICAgY29uc3QgYW1vdW50ID0gdG90YWxcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IGFtb3VudCwgbnVtOiBhbW91bnQudG9TdHJpbmcoKX0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y3NzLnRpdGxlfT5SaXNpbmcgVHVpdGlvbi4gUmlzaW5nIERlYnQuPC9oMz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y3NzLnByaWNlfT4ke3RoaXMuc3RhdGUubnVtLnJlcGxhY2UoLyhcXGQrKShcXGR7M30pLywgJyQxJyArICcsJyArICckMicpfTwvaDI+XG4gICAgICAgIDxoNiBjbGFzc05hbWU9e2Nzcy5sYWJlbH0+QXZlcmFnZSBBbW91bnQgQm9ycm93ZWQgYnkgR3JhZHVhdGVzIGluIDIwMTY8L2g2PlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9