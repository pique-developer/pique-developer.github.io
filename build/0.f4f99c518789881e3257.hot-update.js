webpackHotUpdate(0,{

/***/ 158:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _index = __webpack_require__(149);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(121);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(7);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(122);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _hero = __webpack_require__(175);

var _hero2 = _interopRequireDefault(_hero);

var _cMask = __webpack_require__(176);

var _cMask2 = _interopRequireDefault(_cMask);

var _Header = __webpack_require__(156);

var _Header2 = _interopRequireDefault(_Header);

var _Counter = __webpack_require__(380);

var _Counter2 = _interopRequireDefault(_Counter);

var _Waves = __webpack_require__(382);

var _Waves2 = _interopRequireDefault(_Waves);

var _style = __webpack_require__(375);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _components = {
  Home: {
    displayName: 'Home'
  }
};

var _UsersEvSrcDevPiqueSiteNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
  filename: '/Users/ev/src/dev/pique-site/app/containers/Home/index.js',
  components: _components,
  locals: [module],
  imports: [_react3.default]
});

var _UsersEvSrcDevPiqueSiteNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
  filename: '/Users/ev/src/dev/pique-site/app/containers/Home/index.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _index2.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _UsersEvSrcDevPiqueSiteNode_modulesReactTransformHmrLibIndexJs2(_UsersEvSrcDevPiqueSiteNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
  };
}

var Home = exports.Home = _wrapComponent('Home')(function (_Component) {
  _inherits(Home, _Component);

  function Home(props) {
    _classCallCheck(this, Home);

    var _this = _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));

    _this.state = { rise: false };
    return _this;
  }

  _createClass(Home, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.timeout = setTimeout(function (_) {
        return _this2.setState({ rise: true });
      }, 500);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_Header2.default, null),
        _react3.default.createElement(
          'div',
          { className: _style2.default.hero, style: {
              backgroundImage: 'url(' + _hero2.default,
              WebkitMaskImage: 'url(' + _cMask2.default
            } },
          _react3.default.createElement('div', { className: _style2.default.fade }),
          _react3.default.createElement('h1', { className: _style2.default.h1 }),
          _react3.default.createElement(
            'button',
            { className: _style2.default.btn },
            'Sign Up for Free!'
          )
        ),
        _react3.default.createElement(_Counter2.default, null),
        _react3.default.createElement(_Waves2.default, { rise: this.state.rise })
      );
    }
  }]);

  return Home;
}(_react2.Component));

exports.default = Home;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(33)(module)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29udGFpbmVycy9Ib21lL2luZGV4LmpzPzJhMWQiXSwibmFtZXMiOlsicHJvcHMiLCJzdGF0ZSIsInJpc2UiLCJ0aW1lb3V0Iiwic2V0VGltZW91dCIsInNldFN0YXRlIiwiY2xlYXJUaW1lb3V0IiwiaGVybyIsImJhY2tncm91bmRJbWFnZSIsIldlYmtpdE1hc2tJbWFnZSIsImZhZGUiLCJoMSIsImJ0biIsIkhvbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR0UsZ0JBQVlBLEtBQVosRUFBbUI7QUFBQTs7QUFBQSw0R0FDWEEsS0FEVzs7QUFHakIsVUFBS0MsS0FBTCxHQUFhLEVBQUNDLE1BQU0sS0FBUCxFQUFiO0FBSGlCO0FBSWxCOzs7O3dDQUVtQjtBQUFBOztBQUNsQixXQUFLQyxPQUFMLEdBQWVDLFdBQVc7QUFBQSxlQUFLLE9BQUtDLFFBQUwsQ0FBYyxFQUFFSCxNQUFNLElBQVIsRUFBZCxDQUFMO0FBQUEsT0FBWCxFQUErQyxHQUEvQyxDQUFmO0FBQ0Q7OzsyQ0FFc0I7QUFDckJJLG1CQUFhLEtBQUtILE9BQWxCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0UsNkRBREY7QUFFRTtBQUFBO0FBQUEsWUFBSyxXQUFXLGdCQUFJSSxJQUFwQixFQUEwQixPQUFPO0FBQy9CQyxzREFEK0I7QUFFL0JDO0FBRitCLGFBQWpDO0FBSUUsaURBQUssV0FBVyxnQkFBSUMsSUFBcEIsR0FKRjtBQUtFLGdEQUFJLFdBQVcsZ0JBQUlDLEVBQW5CLEdBTEY7QUFNRTtBQUFBO0FBQUEsY0FBUSxXQUFXLGdCQUFJQyxHQUF2QjtBQUFBO0FBQUE7QUFORixTQUZGO0FBVUUsOERBVkY7QUFXRSx5REFBTyxNQUFNLEtBQUtYLEtBQUwsQ0FBV0MsSUFBeEI7QUFYRixPQURGO0FBZUQ7Ozs7OztrQkFJWVcsSSIsImZpbGUiOiIwLmY0Zjk5YzUxODc4OTg4MWUzMjU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgaGVybyBmcm9tICcuLzAwMi1oZXJvLnBuZydcbmltcG9ydCBtYXNrIGZyb20gJy4vYy1tYXNrLnBuZydcbmltcG9ydCBIZWFkZXIgZnJvbSAnY29tcG9uZW50cy9IZWFkZXInXG5pbXBvcnQgQ291bnRlciBmcm9tICcuL0NvdW50ZXInXG5pbXBvcnQgV2F2ZXMgZnJvbSAnLi9XYXZlcydcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmV4cG9ydCBjbGFzcyBIb21lIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7cmlzZTogZmFsc2V9XG4gIH1cblxuICBjb21wb25lbnREaWRNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVvdXQgPSBzZXRUaW1lb3V0KF8gPT4gdGhpcy5zZXRTdGF0ZSh7IHJpc2U6IHRydWUgfSksIDUwMClcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxVbm1vdW50KCkge1xuICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVvdXQpXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5oZXJvfSBzdHlsZT17e1xuICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2hlcm99YCxcbiAgICAgICAgICBXZWJraXRNYXNrSW1hZ2U6IGB1cmwoJHttYXNrfWAsXG4gICAgICAgIH19PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuZmFkZX0gLz5cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtjc3MuaDF9IC8+XG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9e2Nzcy5idG59PlNpZ24gVXAgZm9yIEZyZWUhPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8Q291bnRlciAvPlxuICAgICAgICA8V2F2ZXMgcmlzZT17dGhpcy5zdGF0ZS5yaXNlfS8+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBIb21lXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5qcyJdLCJzb3VyY2VSb290IjoiIn0=