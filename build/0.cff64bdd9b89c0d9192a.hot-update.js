webpackHotUpdate(0,{

/***/ 152:
/***/ function(module, exports, __webpack_require__) {

"use strict";
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Link = __webpack_require__(373);

var _Link2 = _interopRequireDefault(_Link);

var _logo = __webpack_require__(372);

var _logo2 = _interopRequireDefault(_logo);

var _style = __webpack_require__(368);

var _style2 = _interopRequireDefault(_style);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = exports.Header = function Header(props) {
  return _react2.default.createElement(
    'div',
    { className: _style2.default.root },
    _react2.default.createElement(
      'div',
      { className: _style2.default.brand },
      _react2.default.createElement(
        _Link2.default,
        { href: '/' },
        _react2.default.createElement('img', { className: _style2.default.img, src: _logo2.default })
      )
    ),
    _react2.default.createElement(
      'div',
      { className: _style2.default.links },
      _react2.default.createElement(
        'div',
        { className: _style2.default.nav },
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, href: 'about.html' },
          'About Us'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, href: 'educators.html' },
          'Educators'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, href: 'providers.html' },
          'Scholarship Providers'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, href: 'students.html' },
          'Students'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.btn, href: '#sign-up' },
        'Sign Up'
      )
    )
  );
};

exports.default = Header;

/***/ },

/***/ 373:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {'use strict';

exports.__esModule = true;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _Broadcasts = __webpack_require__(116);

var _PropTypes = __webpack_require__(63);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Link = function (_React$Component) {
  _inherits(Link, _React$Component);

  function Link() {
    var _temp, _this, _ret;

    _classCallCheck(this, Link);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.handleClick = function (event) {
      if (_this.props.onClick) _this.props.onClick(event);

      if (!event.defaultPrevented && // onClick prevented default
      !_this.props.target && // let browser handle "target=_blank" etc.
      !isModifiedEvent(event) && isLeftClickEvent(event)) {
        event.preventDefault();
        _this.handleTransition();
      }
    }, _this.handleTransition = function () {
      var router = _this.context.router;
      var _this$props = _this.props;
      var to = _this$props.to;
      var replace = _this$props.replace;

      var navigate = replace ? router.replaceWith : router.transitionTo;
      navigate(to);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  Link.prototype.render = function render() {
    var _this2 = this;

    var router = this.context.router;
    var _props = this.props;
    var to = _props.to;
    var style = _props.style;
    var activeStyle = _props.activeStyle;
    var className = _props.className;
    var activeClassName = _props.activeClassName;
    var propLocation = _props.location;
    var getIsActive = _props.isActive;
    var activeOnlyWhenExact = _props.activeOnlyWhenExact;
    var replace = _props.replace;
    var children = _props.children;

    var rest = _objectWithoutProperties(_props, ['to', 'style', 'activeStyle', 'className', 'activeClassName', 'location', 'isActive', 'activeOnlyWhenExact', 'replace', 'children']);

    var apatheticToIsActive = activeClassName === '' && Object.keys(activeStyle).length === 0 && typeof children !== 'function';

    if (apatheticToIsActive) {
      return _react2.default.createElement('a', _extends({
        href: router ? router.createHref(to) : to,
        onClick: this.handleClick,
        style: style,
        className: className,
        children: children
      }, rest));
    }

    return _react2.default.createElement(
      _Broadcasts.LocationSubscriber,
      null,
      function (contextLocation) {
        var location = propLocation || contextLocation;

        var isActive = getIsActive(location, createLocationDescriptor(to), _this2.props);

        // If children is a function, we are using a Function as Children Component
        // so useful values will be passed down to the children function.
        if (typeof children == 'function') {
          return children({
            isActive: isActive,
            location: location,
            href: router ? router.createHref(to) : to,
            onClick: _this2.handleClick,
            transition: _this2.handleTransition
          });
        }

        // Maybe we should use <Match> here? Not sure how the custom `isActive`
        // prop would shake out, also, this check happens a LOT so maybe its good
        // to optimize here w/ a faster isActive check, so we'd need to benchmark
        // any attempt at changing to use <Match>
        return _react2.default.createElement('a', _extends({
          href: router ? router.createHref(to) : to,
          onClick: _this2.handleClick,
          style: isActive ? _extends({}, style, activeStyle) : style,
          className: isActive ? [className, activeClassName].join(' ').trim() : className,
          children: children
        }, rest));
      }
    );
  };

  return Link;
}(_react2.default.Component);

Link.defaultProps = {
  replace: false,
  activeOnlyWhenExact: false,
  className: '',
  activeClassName: '',
  style: {},
  activeStyle: {},
  isActive: function isActive(location, to, props) {
    return pathIsActive(to.pathname, location.pathname, props.activeOnlyWhenExact) && queryIsActive(to.query, location.query);
  }
};
Link.contextTypes = {
  router: _PropTypes.routerContext
};


if (process.env.NODE_ENV !== 'production') {
  Link.propTypes = {
    to: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.object]).isRequired,
    replace: _react.PropTypes.bool,
    activeStyle: _react.PropTypes.object,
    activeClassName: _react.PropTypes.string,
    location: _react.PropTypes.object,
    activeOnlyWhenExact: _react.PropTypes.bool,
    isActive: _react.PropTypes.func,
    children: _react.PropTypes.oneOfType([_react.PropTypes.node, _react.PropTypes.func]),

    // props we have to deal with but aren't necessarily
    // part of the Link API
    style: _react.PropTypes.object,
    className: _react.PropTypes.string,
    target: _react.PropTypes.string,
    onClick: _react.PropTypes.func
  };
}

// we should probably use LocationUtils.createLocationDescriptor
var createLocationDescriptor = function createLocationDescriptor(to) {
  return (typeof to === 'undefined' ? 'undefined' : _typeof(to)) === 'object' ? to : { pathname: to };
};

var pathIsActive = function pathIsActive(to, pathname, activeOnlyWhenExact) {
  return activeOnlyWhenExact ? pathname === to : pathname.indexOf(to) === 0;
};

var queryIsActive = function queryIsActive(query, activeQuery) {
  if (activeQuery == null) return query == null;

  if (query == null) return true;

  return deepEqual(query, activeQuery);
};

var isLeftClickEvent = function isLeftClickEvent(event) {
  return event.button === 0;
};

var isModifiedEvent = function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
};

var deepEqual = function deepEqual(a, b) {
  if (a == b) return true;

  if (a == null || b == null) return false;

  if (Array.isArray(a)) {
    return Array.isArray(b) && a.length === b.length && a.every(function (item, index) {
      return deepEqual(item, b[index]);
    });
  }

  if ((typeof a === 'undefined' ? 'undefined' : _typeof(a)) === 'object') {
    for (var p in a) {
      if (!Object.prototype.hasOwnProperty.call(a, p)) {
        continue;
      }

      if (a[p] === undefined) {
        if (b[p] !== undefined) {
          return false;
        }
      } else if (!Object.prototype.hasOwnProperty.call(b, p)) {
        return false;
      } else if (!deepEqual(a[p], b[p])) {
        return false;
      }
    }

    return true;
  }

  return String(a) === String(b);
};

exports.default = Link;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/ZTBkZSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9MaW5rLmpzP2IyMjIiXSwibmFtZXMiOlsiSGVhZGVyIiwicm9vdCIsImJyYW5kIiwiaW1nIiwibGlua3MiLCJuYXYiLCJsaW5rIiwiYnRuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsUUFBUztBQUM3QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVcsZ0JBQUlDLElBQXBCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBSUMsS0FBcEI7QUFDRTtBQUFBO0FBQUEsVUFBTSxNQUFNLEdBQVo7QUFBZ0IsK0NBQUssV0FBVyxnQkFBSUMsR0FBcEIsRUFBeUIsbUJBQXpCO0FBQWhCO0FBREYsS0FERjtBQUlFO0FBQUE7QUFBQSxRQUFLLFdBQVcsZ0JBQUlDLEtBQXBCO0FBQ0U7QUFBQTtBQUFBLFVBQUssV0FBVyxnQkFBSUMsR0FBcEI7QUFDRTtBQUFBO0FBQUEsWUFBTSxXQUFXLGdCQUFJQyxJQUFyQixFQUEyQixNQUFLLFlBQWhDO0FBQUE7QUFBQSxTQURGO0FBRUU7QUFBQTtBQUFBLFlBQU0sV0FBVyxnQkFBSUEsSUFBckIsRUFBMkIsTUFBSyxnQkFBaEM7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBTSxXQUFXLGdCQUFJQSxJQUFyQixFQUEyQixNQUFLLGdCQUFoQztBQUFBO0FBQUEsU0FIRjtBQUlFO0FBQUE7QUFBQSxZQUFNLFdBQVcsZ0JBQUlBLElBQXJCLEVBQTJCLE1BQUssZUFBaEM7QUFBQTtBQUFBO0FBSkYsT0FERjtBQU9HO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlDLEdBQXBCLEVBQXlCLE1BQUssVUFBOUI7QUFBQTtBQUFBO0FBUEg7QUFKRixHQURGO0FBZ0JELENBakJNOztrQkFtQlFQLE07Ozs7Ozs7O0FDeEJmOztBQUVBOztBQUVBLG9HQUFvRyxtQkFBbUIsRUFBRSxtQkFBbUIsOEhBQThIOztBQUUxUSxtREFBbUQsZ0JBQWdCLHNCQUFzQixPQUFPLDJCQUEyQiwwQkFBMEIseURBQXlELDJCQUEyQixFQUFFLEVBQUUsRUFBRSxlQUFlOztBQUU5UDs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQSxzQ0FBc0MsdUNBQXVDLGdCQUFnQjs7QUFFN0YsOENBQThDLGlCQUFpQixxQkFBcUIsb0NBQW9DLDZEQUE2RCxvQkFBb0IsRUFBRSxlQUFlOztBQUUxTixpREFBaUQsMENBQTBDLDBEQUEwRCxFQUFFOztBQUV2SixpREFBaUQsYUFBYSx1RkFBdUYsRUFBRSx1RkFBdUY7O0FBRTlPLDBDQUEwQywrREFBK0QscUdBQXFHLEVBQUUseUVBQXlFLGVBQWUseUVBQXlFLEVBQUUsRUFBRSx1SEFBdUg7O0FBRTVlO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQSxtRUFBbUUsYUFBYTtBQUNoRjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1gsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxzRkFBc0Y7QUFDdEY7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx1QiIsImZpbGUiOiIwLmNmZjY0YmRkOWI4OWMwZDkxOTJhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICdyZWFjdC1yb3V0ZXIvTGluaydcbmltcG9ydCBsb2dvIGZyb20gJy4vMDAxLWxvZ28ucG5nJ1xuaW1wb3J0IGNzcyBmcm9tICcuL3N0eWxlLmNzcydcblxuZXhwb3J0IGNvbnN0IEhlYWRlciA9IHByb3BzID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLnJvb3R9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5icmFuZH0+XG4gICAgICAgIDxMaW5rIGhyZWYgPVwiL1wiPjxpbWcgY2xhc3NOYW1lPXtjc3MuaW1nfSBzcmM9e2xvZ299IC8+PC9MaW5rPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmxpbmtzfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5uYXZ9PlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y3NzLmxpbmt9IGhyZWY9XCJhYm91dC5odG1sXCI+QWJvdXQgVXM8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjc3MubGlua30gaHJlZj1cImVkdWNhdG9ycy5odG1sXCI+RWR1Y2F0b3JzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y3NzLmxpbmt9IGhyZWY9XCJwcm92aWRlcnMuaHRtbFwiPlNjaG9sYXJzaGlwIFByb3ZpZGVyczwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2Nzcy5saW5rfSBocmVmPVwic3R1ZGVudHMuaHRtbFwiPlN0dWRlbnRzPC9MaW5rPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnRufSBocmVmPVwiI3NpZ24tdXBcIj5TaWduIFVwPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIZWFkZXJcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanMiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jyb2FkY2FzdHMgPSByZXF1aXJlKCcuL0Jyb2FkY2FzdHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICAhX3RoaXMucHJvcHMudGFyZ2V0ICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAmJiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByb3V0ZXIgPSBfdGhpcy5jb250ZXh0LnJvdXRlcjtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgdmFyIHRvID0gX3RoaXMkcHJvcHMudG87XG4gICAgICB2YXIgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2U7XG5cbiAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlcGxhY2UgPyByb3V0ZXIucmVwbGFjZVdpdGggOiByb3V0ZXIudHJhbnNpdGlvblRvO1xuICAgICAgbmF2aWdhdGUodG8pO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXI7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICB2YXIgYWN0aXZlU3R5bGUgPSBfcHJvcHMuYWN0aXZlU3R5bGU7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG4gICAgdmFyIHByb3BMb2NhdGlvbiA9IF9wcm9wcy5sb2NhdGlvbjtcbiAgICB2YXIgZ2V0SXNBY3RpdmUgPSBfcHJvcHMuaXNBY3RpdmU7XG4gICAgdmFyIGFjdGl2ZU9ubHlXaGVuRXhhY3QgPSBfcHJvcHMuYWN0aXZlT25seVdoZW5FeGFjdDtcbiAgICB2YXIgcmVwbGFjZSA9IF9wcm9wcy5yZXBsYWNlO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdzdHlsZScsICdhY3RpdmVTdHlsZScsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2xvY2F0aW9uJywgJ2lzQWN0aXZlJywgJ2FjdGl2ZU9ubHlXaGVuRXhhY3QnLCAncmVwbGFjZScsICdjaGlsZHJlbiddKTtcblxuICAgIHZhciBhcGF0aGV0aWNUb0lzQWN0aXZlID0gYWN0aXZlQ2xhc3NOYW1lID09PSAnJyAmJiBPYmplY3Qua2V5cyhhY3RpdmVTdHlsZSkubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjaGlsZHJlbiAhPT0gJ2Z1bmN0aW9uJztcblxuICAgIGlmIChhcGF0aGV0aWNUb0lzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7XG4gICAgICAgIGhyZWY6IHJvdXRlciA/IHJvdXRlci5jcmVhdGVIcmVmKHRvKSA6IHRvLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnJvYWRjYXN0cy5Mb2NhdGlvblN1YnNjcmliZXIsXG4gICAgICBudWxsLFxuICAgICAgZnVuY3Rpb24gKGNvbnRleHRMb2NhdGlvbikge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBwcm9wTG9jYXRpb24gfHwgY29udGV4dExvY2F0aW9uO1xuXG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGdldElzQWN0aXZlKGxvY2F0aW9uLCBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8pLCBfdGhpczIucHJvcHMpO1xuXG4gICAgICAgIC8vIElmIGNoaWxkcmVuIGlzIGEgZnVuY3Rpb24sIHdlIGFyZSB1c2luZyBhIEZ1bmN0aW9uIGFzIENoaWxkcmVuIENvbXBvbmVudFxuICAgICAgICAvLyBzbyB1c2VmdWwgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIGRvd24gdG8gdGhlIGNoaWxkcmVuIGZ1bmN0aW9uLlxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgaHJlZjogcm91dGVyID8gcm91dGVyLmNyZWF0ZUhyZWYodG8pIDogdG8sXG4gICAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBfdGhpczIuaGFuZGxlVHJhbnNpdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWF5YmUgd2Ugc2hvdWxkIHVzZSA8TWF0Y2g+IGhlcmU/IE5vdCBzdXJlIGhvdyB0aGUgY3VzdG9tIGBpc0FjdGl2ZWBcbiAgICAgICAgLy8gcHJvcCB3b3VsZCBzaGFrZSBvdXQsIGFsc28sIHRoaXMgY2hlY2sgaGFwcGVucyBhIExPVCBzbyBtYXliZSBpdHMgZ29vZFxuICAgICAgICAvLyB0byBvcHRpbWl6ZSBoZXJlIHcvIGEgZmFzdGVyIGlzQWN0aXZlIGNoZWNrLCBzbyB3ZSdkIG5lZWQgdG8gYmVuY2htYXJrXG4gICAgICAgIC8vIGFueSBhdHRlbXB0IGF0IGNoYW5naW5nIHRvIHVzZSA8TWF0Y2g+XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnYScsIF9leHRlbmRzKHtcbiAgICAgICAgICBocmVmOiByb3V0ZXIgPyByb3V0ZXIuY3JlYXRlSHJlZih0bykgOiB0byxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgc3R5bGU6IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSkgOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGlzQWN0aXZlID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykudHJpbSgpIDogY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9LCByZXN0KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICByZXBsYWNlOiBmYWxzZSxcbiAgYWN0aXZlT25seVdoZW5FeGFjdDogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFjdGl2ZUNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fSxcbiAgYWN0aXZlU3R5bGU6IHt9LFxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUobG9jYXRpb24sIHRvLCBwcm9wcykge1xuICAgIHJldHVybiBwYXRoSXNBY3RpdmUodG8ucGF0aG5hbWUsIGxvY2F0aW9uLnBhdGhuYW1lLCBwcm9wcy5hY3RpdmVPbmx5V2hlbkV4YWN0KSAmJiBxdWVyeUlzQWN0aXZlKHRvLnF1ZXJ5LCBsb2NhdGlvbi5xdWVyeSk7XG4gIH1cbn07XG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfUHJvcFR5cGVzLnJvdXRlckNvbnRleHRcbn07XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTGluay5wcm9wVHlwZXMgPSB7XG4gICAgdG86IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0LlByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIHJlcGxhY2U6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVTdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhdGlvbjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgYWN0aXZlT25seVdoZW5FeGFjdDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQWN0aXZlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLm5vZGUsIF9yZWFjdC5Qcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLy8gcHJvcHMgd2UgaGF2ZSB0byBkZWFsIHdpdGggYnV0IGFyZW4ndCBuZWNlc3NhcmlseVxuICAgIC8vIHBhcnQgb2YgdGhlIExpbmsgQVBJXG4gICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfTtcbn1cblxuLy8gd2Ugc2hvdWxkIHByb2JhYmx5IHVzZSBMb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvclxudmFyIGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvciA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bykge1xuICByZXR1cm4gKHR5cGVvZiB0byA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodG8pKSA9PT0gJ29iamVjdCcgPyB0byA6IHsgcGF0aG5hbWU6IHRvIH07XG59O1xuXG52YXIgcGF0aElzQWN0aXZlID0gZnVuY3Rpb24gcGF0aElzQWN0aXZlKHRvLCBwYXRobmFtZSwgYWN0aXZlT25seVdoZW5FeGFjdCkge1xuICByZXR1cm4gYWN0aXZlT25seVdoZW5FeGFjdCA/IHBhdGhuYW1lID09PSB0byA6IHBhdGhuYW1lLmluZGV4T2YodG8pID09PSAwO1xufTtcblxudmFyIHF1ZXJ5SXNBY3RpdmUgPSBmdW5jdGlvbiBxdWVyeUlzQWN0aXZlKHF1ZXJ5LCBhY3RpdmVRdWVyeSkge1xuICBpZiAoYWN0aXZlUXVlcnkgPT0gbnVsbCkgcmV0dXJuIHF1ZXJ5ID09IG51bGw7XG5cbiAgaWYgKHF1ZXJ5ID09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBkZWVwRXF1YWwocXVlcnksIGFjdGl2ZVF1ZXJ5KTtcbn07XG5cbnZhciBpc0xlZnRDbGlja0V2ZW50ID0gZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufTtcblxudmFyIGlzTW9kaWZpZWRFdmVudCA9IGZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59O1xuXG52YXIgZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGRlZXBFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBhKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBwKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFbcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYltwXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICghZGVlcEVxdWFsKGFbcF0sIGJbcF0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci9MaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==