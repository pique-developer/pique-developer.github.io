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
        this.setState({
          counter: this.state.counter + 50
        });
        setTimeout(this.increment, 200);
      } else if (this.state.counter >= this.state.total) {
        this.setState({
          counter: this.state.total
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
          this.state.counter.replace(/(\d+)(\d{3})/, '$1' + ',' + '$2')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL0NvdW50ZXIvaW5kZXguanM/NzRjYiJdLCJuYW1lcyI6WyJwcm9wcyIsInN0YXRlIiwiY291bnRlciIsInRvdGFsIiwiaW5jcmVtZW50IiwiYmluZCIsInNldFN0YXRlIiwic2V0VGltZW91dCIsInJvb3QiLCJ0aXRsZSIsInByaWNlIiwicmVwbGFjZSIsImxhYmVsIiwiQ291bnRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdFLG1CQUFZQSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsa0hBQ1hBLEtBRFc7O0FBR2pCLFVBQUtDLEtBQUwsR0FBYTtBQUNYQyxlQUFTLENBREU7QUFFWEMsYUFBTztBQUZJLEtBQWI7QUFJQSxVQUFLQyxTQUFMLEdBQWlCLE1BQUtBLFNBQUwsQ0FBZUMsSUFBZixPQUFqQjtBQVBpQjtBQVFsQjs7Ozt3Q0FFbUI7QUFDbEIsV0FBS0QsU0FBTDtBQUNEOzs7Z0NBRVc7QUFDVixVQUFJLEtBQUtILEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixLQUFLRCxLQUFMLENBQVdFLEtBQXBDLEVBQTJDO0FBQ3pDLGFBQUtHLFFBQUwsQ0FBYztBQUNaSixtQkFBUyxLQUFLRCxLQUFMLENBQVdDLE9BQVgsR0FBcUI7QUFEbEIsU0FBZDtBQUdBSyxtQkFBVyxLQUFLSCxTQUFoQixFQUEyQixHQUEzQjtBQUNELE9BTEQsTUFLTyxJQUFJLEtBQUtILEtBQUwsQ0FBV0MsT0FBWCxJQUFzQixLQUFLRCxLQUFMLENBQVdFLEtBQXJDLEVBQTRDO0FBQ2pELGFBQUtHLFFBQUwsQ0FBYztBQUNaSixtQkFBUyxLQUFLRCxLQUFMLENBQVdFO0FBRFIsU0FBZDtBQUdEO0FBQ0Y7Ozs2QkFDUTtBQUNQLGFBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSUssSUFBcEI7QUFDRTtBQUFBO0FBQUEsWUFBSSxXQUFXLGdCQUFJQyxLQUFuQjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFJLFdBQVcsZ0JBQUlDLEtBQW5CO0FBQUE7QUFBNEIsZUFBS1QsS0FBTCxDQUFXQyxPQUFYLENBQW1CUyxPQUFuQixDQUEyQixjQUEzQixFQUEyQyxPQUFPLEdBQVAsR0FBYSxJQUF4RDtBQUE1QixTQUZGO0FBR0U7QUFBQTtBQUFBLFlBQUksV0FBVyxnQkFBSUMsS0FBbkI7QUFBQTtBQUFBO0FBSEYsT0FERjtBQU9EOzs7Ozs7a0JBR1lDLE8iLCJmaWxlIjoiMC4yMzhjYWNkMjYwNWZhMjNlNjVjNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuZXhwb3J0IGNsYXNzIENvdW50ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGNvdW50ZXI6IDAsXG4gICAgICB0b3RhbDogMzcxNzIsXG4gICAgfVxuICAgIHRoaXMuaW5jcmVtZW50ID0gdGhpcy5pbmNyZW1lbnQuYmluZCh0aGlzKVxuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgdGhpcy5pbmNyZW1lbnQoKVxuICB9XG5cbiAgaW5jcmVtZW50KCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPCB0aGlzLnN0YXRlLnRvdGFsKSB7XG4gICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgY291bnRlcjogdGhpcy5zdGF0ZS5jb3VudGVyICsgNTBcbiAgICAgIH0pXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuaW5jcmVtZW50LCAyMDApXG4gICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmNvdW50ZXIgPj0gdGhpcy5zdGF0ZS50b3RhbCkge1xuICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIGNvdW50ZXI6IHRoaXMuc3RhdGUudG90YWxcbiAgICAgIH0pXG4gICAgfVxuICB9XG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT17Y3NzLnRpdGxlfT5SaXNpbmcgVHVpdGlvbi4gUmlzaW5nIERlYnQuPC9oMz5cbiAgICAgICAgPGgyIGNsYXNzTmFtZT17Y3NzLnByaWNlfT4ke3RoaXMuc3RhdGUuY291bnRlci5yZXBsYWNlKC8oXFxkKykoXFxkezN9KS8sICckMScgKyAnLCcgKyAnJDInKX08L2gyPlxuICAgICAgICA8aDYgY2xhc3NOYW1lPXtjc3MubGFiZWx9PkF2ZXJhZ2UgQW1vdW50IEJvcnJvd2VkIGJ5IEdyYWR1YXRlcyBpbiAyMDE2PC9oNj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvSG9tZS9Db3VudGVyL2luZGV4LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==