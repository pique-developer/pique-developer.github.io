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
        _react3.default.createElement('h3', { className: _style2.default.title }),
        _react3.default.createElement(
          'h2',
          { className: _style2.default.price },
          '$',
          this.state.num.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
        ),
        _react3.default.createElement('h6', { className: _style2.default.label })
      );
    }
  }]);

  return Counter;
}(_react2.Component));

exports.default = Counter;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanM/NzRjYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsInRvdGFsIiwibnVtIiwiaW5jcmVtZW50IiwiYmluZCIsImFtb3VudCIsInNldFN0YXRlIiwidG9TdHJpbmciLCJzZXRUaW1lb3V0Iiwicm9vdCIsInRpdGxlIiwicHJpY2UiLCJyZXBsYWNlIiwibGFiZWwiLCJDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsbUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsQ0FERTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsV0FBSztBQUhNLEtBQWI7QUFLQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQVJpQjtBQVNsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsU0FBTDtBQUNEOzs7Z0NBRVc7QUFBQSxtQkFDaUIsS0FBS0osS0FEdEI7QUFBQSxVQUNGQyxPQURFLFVBQ0ZBLE9BREU7QUFBQSxVQUNPQyxLQURQLFVBQ09BLEtBRFA7O0FBRVYsVUFBSUQsVUFBVUMsS0FBZCxFQUFxQjtBQUNuQixZQUFNSSxTQUFTTCxVQUFVLEdBQXpCO0FBQ0EsYUFBS00sUUFBTCxDQUFjLEVBQUNOLFNBQVNLLE1BQVYsRUFBa0JILEtBQUtHLE9BQU9FLFFBQVAsRUFBdkIsRUFBZDtBQUNBQyxtQkFBVyxLQUFLTCxTQUFoQixFQUEyQixFQUEzQjtBQUNELE9BSkQsTUFJTyxJQUFJSCxXQUFXQyxLQUFmLEVBQXNCO0FBQzNCLFlBQU1JLFVBQVNKLEtBQWY7QUFDQSxhQUFLSyxRQUFMLENBQWMsRUFBQ04sU0FBU0ssT0FBVixFQUFrQkgsS0FBS0csUUFBT0UsUUFBUCxFQUF2QixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJRSxJQUFwQjtBQUNFLDhDQUFJLFdBQVcsZ0JBQUlDLEtBQW5CLEdBREY7QUFFRTtBQUFBO0FBQUEsWUFBSSxXQUFXLGdCQUFJQyxLQUFuQjtBQUFBO0FBQTRCLGVBQUtaLEtBQUwsQ0FBV0csR0FBWCxDQUFlVSxPQUFmLENBQXVCLGNBQXZCLEVBQXVDLE9BQU8sR0FBUCxHQUFhLElBQXBEO0FBQTVCLFNBRkY7QUFHRSw4Q0FBSSxXQUFXLGdCQUFJQyxLQUFuQjtBQUhGLE9BREY7QUFPRDs7Ozs7O2tCQUdZQyxPIiwiZmlsZSI6IjAuMGY5ZmMyMDA2MDZmNmY2YWQwNTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmV4cG9ydCBjbGFzcyBDb3VudGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBjb3VudGVyOiAwLFxuICAgICAgdG90YWw6IDM3MTcyLFxuICAgICAgbnVtOiAnJyxcbiAgICB9XG4gICAgdGhpcy5pbmNyZW1lbnQgPSB0aGlzLmluY3JlbWVudC5iaW5kKHRoaXMpXG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLmluY3JlbWVudCgpXG4gIH1cblxuICBpbmNyZW1lbnQoKSB7XG4gICAgY29uc3QgeyBjb3VudGVyLCB0b3RhbCB9ID0gdGhpcy5zdGF0ZVxuICAgIGlmIChjb3VudGVyIDwgdG90YWwpIHtcbiAgICAgIGNvbnN0IGFtb3VudCA9IGNvdW50ZXIgKyAxMDJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe2NvdW50ZXI6IGFtb3VudCwgbnVtOiBhbW91bnQudG9TdHJpbmcoKX0pXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaW5jcmVtZW50LCAxMClcbiAgICB9IGVsc2UgaWYgKGNvdW50ZXIgPj0gdG90YWwpIHtcbiAgICAgIGNvbnN0IGFtb3VudCA9IHRvdGFsXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiBhbW91bnQsIG51bTogYW1vdW50LnRvU3RyaW5nKCl9KVxuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y3NzLnRpdGxlfSAvPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjc3MucHJpY2V9PiR7dGhpcy5zdGF0ZS5udW0ucmVwbGFjZSgvKFxcZCspKFxcZHszfSkvLCAnJDEnICsgJywnICsgJyQyJyl9PC9oMj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT17Y3NzLmxhYmVsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9