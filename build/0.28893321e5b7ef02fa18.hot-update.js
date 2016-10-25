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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanM/NzRjYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsInRvdGFsIiwibnVtIiwiaW5jcmVtZW50IiwiYmluZCIsImFtb3VudCIsInNldFN0YXRlIiwidG9TdHJpbmciLCJzZXRUaW1lb3V0Iiwicm9vdCIsInRpdGxlIiwicHJpY2UiLCJyZXBsYWNlIiwibGFiZWwiLCJDb3VudGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsbUJBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxrSEFDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhO0FBQ1hDLGVBQVMsQ0FERTtBQUVYQyxhQUFPLEtBRkk7QUFHWEMsV0FBSztBQUhNLEtBQWI7QUFLQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQVJpQjtBQVNsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsU0FBTDtBQUNEOzs7Z0NBRVc7QUFBQSxtQkFDaUIsS0FBS0osS0FEdEI7QUFBQSxVQUNGQyxPQURFLFVBQ0ZBLE9BREU7QUFBQSxVQUNPQyxLQURQLFVBQ09BLEtBRFA7O0FBRVYsVUFBSUQsVUFBVUMsS0FBZCxFQUFxQjtBQUNuQixZQUFNSSxTQUFTTCxVQUFVLEdBQXpCO0FBQ0EsYUFBS00sUUFBTCxDQUFjLEVBQUNOLFNBQVNLLE1BQVYsRUFBa0JILEtBQUtHLE9BQU9FLFFBQVAsRUFBdkIsRUFBZDtBQUNBQyxtQkFBVyxLQUFLTCxTQUFoQixFQUEyQixFQUEzQjtBQUNELE9BSkQsTUFJTyxJQUFJSCxXQUFXQyxLQUFmLEVBQXNCO0FBQzNCLFlBQU1JLFVBQVNKLEtBQWY7QUFDQSxhQUFLSyxRQUFMLENBQWMsRUFBQ04sU0FBU0ssT0FBVixFQUFrQkgsS0FBS0csUUFBT0UsUUFBUCxFQUF2QixFQUFkO0FBQ0Q7QUFDRjs7OzZCQUNRO0FBQ1AsYUFDRTtBQUFBO0FBQUEsVUFBSyxXQUFXLGdCQUFJRSxJQUFwQjtBQUNFO0FBQUE7QUFBQSxZQUFJLFdBQVcsZ0JBQUlDLEtBQW5CO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFBQTtBQUE0QixlQUFLWixLQUFMLENBQVdHLEdBQVgsQ0FBZVUsT0FBZixDQUF1QixjQUF2QixFQUF1QyxPQUFPLEdBQVAsR0FBYSxJQUFwRDtBQUE1QixTQUZGO0FBR0UsOENBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFIRixPQURGO0FBT0Q7Ozs7OztrQkFHWUMsTyIsImZpbGUiOiIwLjI4ODkzMzIxZTViN2VmMDJmYTE4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgY3NzIGZyb20gJy4vc3R5bGUuY3NzJ1xuXG5leHBvcnQgY2xhc3MgQ291bnRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpXG5cbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgY291bnRlcjogMCxcbiAgICAgIHRvdGFsOiAzNzE3MixcbiAgICAgIG51bTogJycsXG4gICAgfVxuICAgIHRoaXMuaW5jcmVtZW50ID0gdGhpcy5pbmNyZW1lbnQuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5pbmNyZW1lbnQoKVxuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIGNvbnN0IHsgY291bnRlciwgdG90YWwgfSA9IHRoaXMuc3RhdGVcbiAgICBpZiAoY291bnRlciA8IHRvdGFsKSB7XG4gICAgICBjb25zdCBhbW91bnQgPSBjb3VudGVyICsgMTAyXG4gICAgICB0aGlzLnNldFN0YXRlKHtjb3VudGVyOiBhbW91bnQsIG51bTogYW1vdW50LnRvU3RyaW5nKCl9KVxuICAgICAgc2V0VGltZW91dCh0aGlzLmluY3JlbWVudCwgMTApXG4gICAgfSBlbHNlIGlmIChjb3VudGVyID49IHRvdGFsKSB7XG4gICAgICBjb25zdCBhbW91bnQgPSB0b3RhbFxuICAgICAgdGhpcy5zZXRTdGF0ZSh7Y291bnRlcjogYW1vdW50LCBudW06IGFtb3VudC50b1N0cmluZygpfSlcbiAgICB9XG4gIH1cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgICA8aDMgY2xhc3NOYW1lPXtjc3MudGl0bGV9PlJpc2luZyBUdWl0aW9uLiBSaXNpbmcgRGVidC48L2gzPlxuICAgICAgICA8aDIgY2xhc3NOYW1lPXtjc3MucHJpY2V9PiR7dGhpcy5zdGF0ZS5udW0ucmVwbGFjZSgvKFxcZCspKFxcZHszfSkvLCAnJDEnICsgJywnICsgJyQyJyl9PC9oMj5cbiAgICAgICAgPGg2IGNsYXNzTmFtZT17Y3NzLmxhYmVsfSAvPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvdW50ZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanMiXSwic291cmNlUm9vdCI6IiJ9