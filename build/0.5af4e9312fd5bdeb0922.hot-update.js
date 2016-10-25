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
        { to: '/' },
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
          { className: _style2.default.link, to: '/about' },
          'About Us'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, to: '/educators' },
          'Educators'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, to: '/providers' },
          'Scholarship Providers'
        ),
        _react2.default.createElement(
          _Link2.default,
          { className: _style2.default.link, to: '/students' },
          'Students'
        )
      ),
      _react2.default.createElement(
        'div',
        { className: _style2.default.btn },
        'Sign Up'
      )
    )
  );
};

exports.default = Header;

/***/ },

/***/ 368:
/***/ function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(53);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(145)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(true) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept(53, function() {
			var newContent = __webpack_require__(53);
			if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ },

/***/ 372:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "da1aabe7d17f99b5f3e96667c5a34fd4.png";

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

/***/ },

/***/ 374:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Home = undefined;

var _index = __webpack_require__(360);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(289);

var _index4 = _interopRequireDefault(_index3);

var _react2 = __webpack_require__(7);

var _react3 = _interopRequireDefault(_react2);

var _index5 = __webpack_require__(290);

var _index6 = _interopRequireDefault(_index5);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _Header = __webpack_require__(152);

var _Header2 = _interopRequireDefault(_Header);

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

  function Home() {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react3.default.createElement(
        'div',
        null,
        _react3.default.createElement(_Header2.default, null)
      );
    }
  }]);

  return Home;
}(_react2.Component));

exports.default = Home;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(51)(module)))

/***/ },

/***/ 53:
/***/ function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(86)();
// imports


// module
exports.push([module.i, ".root__app-components-Header-style__3OXay {\n  position: fixed;\n  width: 100%;\n  padding: 10px 40px;\n  z-index: 40;\n  top: 10px;\n  transition: all 0.2s ease;\n  background-color: #000;\n}\n\n.brand__app-components-Header-style__zeswz {\n  float: left;\n}\n\n.img__app-components-Header-style__2JoSM {\n  display: inline-block;\n  height: 50px;\n  width: auto;\n  margin-top: 7.5px;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.links__app-components-Header-style__nEPG4 {\n  float: right;\n}\n\n.nav__app-components-Header-style__32VlY {\n  display: inline-block;\n  margin-top: 4px 20px 0 auto;\n  padding-left: 0;\n  list-style: none;\n  float: left;\n}\n\n.link__app-components-Header-style__1YaDa {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  font-weight: 300;\n  letter-spacing: 0px;\n  margin: 14px 13px;\n  font-size: 15px;\n  font-family: 'Avenir Next', sans-serif;\n  padding: 5px 4px;\n  background-color: transparent;\n}\n\n.pill__app-components-Header-style__2_9LA {\n  background-color: transparent;\n  border: 2px solid white;\n  border-radius: 22px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  padding: 8px 25px;\n  margin: 10px 13px;\n  font-size: 15px;\n  color: #fff;\n  font-family: 'Avenir Next', sans-serif;\n}\n\n.waves__app-components-Header-style__9D2pE {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 1;\n  transition: all .3s ease-out;\n  line-height: 1.42857143;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  background-image: none;\n  will-change: opacity, transform;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n  white-space: nowrap;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n}\n\n.btn__app-components-Header-style__ArnkU {\n}\n\n.btn__app-components-Header-style__ArnkU:hover, .btn__app-components-Header-style__ArnkU:focus {\n  background-color: #fff;\n  color:  #205fdc;\n}", "", {"version":3,"sources":["/./app/components/Header/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,UAAU;EACV,0BAA0B;EAC1B,uBAAuB;CACxB;;AAED;EACE,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,8BAA8B;CAC/B;;AAED;EACE,aAAa;CACd;;AAED;EACE,sBAAsB;EACtB,4BAA4B;EAC5B,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,sBAAsB;EACtB,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,gBAAgB;EAChB,uCAAuC;EACvC,iBAAiB;EACjB,8BAA8B;CAC/B;;AAED;EACE,8BAA8B;EAC9B,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oBAAoB;EACpB,kBAAkB;EAClB,kBAAkB;EAClB,gBAAgB;EAChB,YAAY;EACZ,uCAAuC;CACxC;;AAED;EACE,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,WAAW;EACX,6BAA6B;EAC7B,wBAAwB;EACxB,mBAAmB;EACnB,sBAAsB;EACtB,gBAAgB;EAChB,uBAAuB;EACvB,gCAAgC;EAChC,0BAAkB;KAAlB,uBAAkB;MAAlB,sBAAkB;UAAlB,kBAAkB;EAClB,iBAAiB;EACjB,oBAAoB;EACpB,+BAA2B;MAA3B,2BAA2B;CAC5B;;AAED;CAGC;;AAED;EACE,uBAAuB;EACvB,gBAAgB;CACjB","file":"style.css","sourcesContent":[".root {\n  position: fixed;\n  width: 100%;\n  padding: 10px 40px;\n  z-index: 40;\n  top: 10px;\n  transition: all 0.2s ease;\n  background-color: #000;\n}\n\n.brand {\n  float: left;\n}\n\n.img {\n  display: inline-block;\n  height: 50px;\n  width: auto;\n  margin-top: 7.5px;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: transparent;\n}\n\n.links {\n  float: right;\n}\n\n.nav {\n  display: inline-block;\n  margin-top: 4px 20px 0 auto;\n  padding-left: 0;\n  list-style: none;\n  float: left;\n}\n\n.link {\n  display: inline-block;\n  color: white;\n  text-decoration: none;\n  font-weight: 300;\n  letter-spacing: 0px;\n  margin: 14px 13px;\n  font-size: 15px;\n  font-family: 'Avenir Next', sans-serif;\n  padding: 5px 4px;\n  background-color: transparent;\n}\n\n.pill {\n  background-color: transparent;\n  border: 2px solid white;\n  border-radius: 22px;\n  font-weight: 400;\n  letter-spacing: 0px;\n  padding: 8px 25px;\n  margin: 10px 13px;\n  font-size: 15px;\n  color: #fff;\n  font-family: 'Avenir Next', sans-serif;\n}\n\n.waves {\n  display: inline-block;\n  position: relative;\n  vertical-align: middle;\n  z-index: 1;\n  transition: all .3s ease-out;\n  line-height: 1.42857143;\n  text-align: center;\n  text-decoration: none;\n  cursor: pointer;\n  background-image: none;\n  will-change: opacity, transform;\n  user-select: none;\n  overflow: hidden;\n  white-space: nowrap;\n  touch-action: manipulation;\n}\n\n.btn {\n  composes: pill;\n  composes: waves;\n}\n\n.btn:hover {\n  background-color: #fff;\n  color:  #205fdc;\n}"],"sourceRoot":"webpack://"}]);

// exports
exports.locals = {
	"root": "root__app-components-Header-style__3OXay",
	"brand": "brand__app-components-Header-style__zeswz",
	"img": "img__app-components-Header-style__2JoSM",
	"links": "links__app-components-Header-style__nEPG4",
	"nav": "nav__app-components-Header-style__32VlY",
	"link": "link__app-components-Header-style__1YaDa",
	"pill": "pill__app-components-Header-style__2_9LA",
	"waves": "waves__app-components-Header-style__9D2pE",
	"btn": "btn__app-components-Header-style__ArnkU pill__app-components-Header-style__2_9LA waves__app-components-Header-style__9D2pE"
};

/***/ }

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvaW5kZXguanM/ZTBkZSIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuY3NzPzg0NWQqIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci8wMDEtbG9nby5wbmc/NjdiZSIsIndlYnBhY2s6Ly8vLi9+L3JlYWN0LXJvdXRlci9MaW5rLmpzP2IyMjIiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbnRhaW5lcnMvSG9tZS9pbmRleC5qcz8yYTFkIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9zdHlsZS5jc3M/NTZkOSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJyb290IiwiYnJhbmQiLCJpbWciLCJsaW5rcyIsIm5hdiIsImxpbmsiLCJidG4iLCJIb21lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVPLElBQU1BLDBCQUFTLFNBQVRBLE1BQVMsUUFBUztBQUM3QixTQUNFO0FBQUE7QUFBQSxNQUFLLFdBQVcsZ0JBQUlDLElBQXBCO0FBQ0U7QUFBQTtBQUFBLFFBQUssV0FBVyxnQkFBSUMsS0FBcEI7QUFDRTtBQUFBO0FBQUEsVUFBTSxJQUFHLEdBQVQ7QUFBYSwrQ0FBSyxXQUFXLGdCQUFJQyxHQUFwQixFQUF5QixtQkFBekI7QUFBYjtBQURGLEtBREY7QUFJRTtBQUFBO0FBQUEsUUFBSyxXQUFXLGdCQUFJQyxLQUFwQjtBQUNFO0FBQUE7QUFBQSxVQUFLLFdBQVcsZ0JBQUlDLEdBQXBCO0FBQ0U7QUFBQTtBQUFBLFlBQU0sV0FBVyxnQkFBSUMsSUFBckIsRUFBMkIsSUFBRyxRQUE5QjtBQUFBO0FBQUEsU0FERjtBQUVFO0FBQUE7QUFBQSxZQUFNLFdBQVcsZ0JBQUlBLElBQXJCLEVBQTJCLElBQUcsWUFBOUI7QUFBQTtBQUFBLFNBRkY7QUFHRTtBQUFBO0FBQUEsWUFBTSxX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WUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssTUFBTSxLQUFLLFlBQVksYUFBYSxvREFBb0Qsb0JBQW9CLGdCQUFnQix1QkFBdUIsZ0JBQWdCLGNBQWMsOEJBQThCLDJCQUEyQixHQUFHLFlBQVksZ0JBQWdCLEdBQUcsVUFBVSwwQkFBMEIsaUJBQWlCLGdCQUFnQixzQkFBc0IsbUJBQW1CLDBCQUEwQixrQ0FBa0MsR0FBRyxZQUFZLGlCQUFpQixHQUFHLFVBQVUsMEJBQTBCLGdDQUFnQyxvQkFBb0IscUJBQXFCLGdCQUFnQixHQUFHLFdBQVcsMEJBQTBCLGlCQUFpQiwwQkFBMEIscUJBQXFCLHdCQUF3QixzQkFBc0Isb0JBQW9CLDJDQUEyQyxxQkFBcUIsa0NBQWtDLEdBQUcsV0FBVyxrQ0FBa0MsNEJBQTRCLHdCQUF3QixxQkFBcUIsd0JBQXdCLHNCQUFzQixzQkFBc0Isb0JBQW9CLGdCQUFnQiwyQ0FBMkMsR0FBRyxZQUFZLDBCQUEwQix1QkFBdUIsMkJBQTJCLGVBQWUsaUNBQWlDLDRCQUE0Qix1QkFBdUIsMEJBQTBCLG9CQUFvQiwyQkFBMkIsb0NBQW9DLHNCQUFzQixxQkFBcUIsd0JBQXdCLCtCQUErQixHQUFHLFVBQVUsbUJBQW1CLG9CQUFvQixHQUFHLGdCQUFnQiwyQkFBMkIsb0JBQW9CLEdBQUcsNkJBQTZCOztBQUV6bUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEUiLCJmaWxlIjoiMC41YWY0ZTkzMTJmZDViZGViMDkyMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IExpbmsgZnJvbSAncmVhY3Qtcm91dGVyL0xpbmsnXG5pbXBvcnQgbG9nbyBmcm9tICcuLzAwMS1sb2dvLnBuZydcbmltcG9ydCBjc3MgZnJvbSAnLi9zdHlsZS5jc3MnXG5cbmV4cG9ydCBjb25zdCBIZWFkZXIgPSBwcm9wcyA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5yb290fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MuYnJhbmR9PlxuICAgICAgICA8TGluayB0bz1cIi9cIj48aW1nIGNsYXNzTmFtZT17Y3NzLmltZ30gc3JjPXtsb2dvfSAvPjwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e2Nzcy5saW5rc30+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjc3MubmF2fT5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2Nzcy5saW5rfSB0bz1cIi9hYm91dFwiPkFib3V0IFVzPC9MaW5rPlxuICAgICAgICAgIDxMaW5rIGNsYXNzTmFtZT17Y3NzLmxpbmt9IHRvPVwiL2VkdWNhdG9yc1wiPkVkdWNhdG9yczwvTGluaz5cbiAgICAgICAgICA8TGluayBjbGFzc05hbWU9e2Nzcy5saW5rfSB0bz1cIi9wcm92aWRlcnNcIj5TY2hvbGFyc2hpcCBQcm92aWRlcnM8L0xpbms+XG4gICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXtjc3MubGlua30gdG89XCIvc3R1ZGVudHNcIj5TdHVkZW50czwvTGluaz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y3NzLmJ0bn0+U2lnbiBVcDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2NvbXBvbmVudHMvSGVhZGVyL2luZGV4LmpzIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bG9jYWxJZGVudE5hbWU9W2xvY2FsXV9fW3BhdGhdW25hbWVdX19baGFzaDpiYXNlNjQ6NV0mbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmc291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9sb2NhbElkZW50TmFtZT1bbG9jYWxdX19bcGF0aF1bbmFtZV1fX1toYXNoOmJhc2U2NDo1XSZtb2R1bGVzJmltcG9ydExvYWRlcnM9MSZzb3VyY2VNYXAhLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvaW5kZXguanMhLi9zdHlsZS5jc3NcIiwgZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/bG9jYWxJZGVudE5hbWU9W2xvY2FsXV9fW3BhdGhdW25hbWVdX19baGFzaDpiYXNlNjQ6NV0mbW9kdWxlcyZpbXBvcnRMb2FkZXJzPTEmc291cmNlTWFwIS4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Bvc3Rjc3MtbG9hZGVyL2luZGV4LmpzIS4vc3R5bGUuY3NzXCIpO1xuXHRcdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cdFx0XHR1cGRhdGUobmV3Q29udGVudCk7XG5cdFx0fSk7XG5cdH1cblx0Ly8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL0hlYWRlci9zdHlsZS5jc3Ncbi8vIG1vZHVsZSBpZCA9IDM2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJkYTFhYWJlN2QxN2Y5OWI1ZjNlOTY2NjdjNWEzNGZkNC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL0hlYWRlci8wMDEtbG9nby5wbmdcbi8vIG1vZHVsZSBpZCA9IDM3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfdHlwZW9mID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPT09IFwic3ltYm9sXCIgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxudmFyIF9yZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XG5cbnZhciBfcmVhY3QyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcmVhY3QpO1xuXG52YXIgX0Jyb2FkY2FzdHMgPSByZXF1aXJlKCcuL0Jyb2FkY2FzdHMnKTtcblxudmFyIF9Qcm9wVHlwZXMgPSByZXF1aXJlKCcuL1Byb3BUeXBlcycpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMob2JqLCBrZXlzKSB7IHZhciB0YXJnZXQgPSB7fTsgZm9yICh2YXIgaSBpbiBvYmopIHsgaWYgKGtleXMuaW5kZXhPZihpKSA+PSAwKSBjb250aW51ZTsgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBpKSkgY29udGludWU7IHRhcmdldFtpXSA9IG9ialtpXTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmZ1bmN0aW9uIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHNlbGYsIGNhbGwpIHsgaWYgKCFzZWxmKSB7IHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTsgfSByZXR1cm4gY2FsbCAmJiAodHlwZW9mIGNhbGwgPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIGNhbGwgPT09IFwiZnVuY3Rpb25cIikgPyBjYWxsIDogc2VsZjsgfVxuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHsgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb24sIG5vdCBcIiArIHR5cGVvZiBzdXBlckNsYXNzKTsgfSBzdWJDbGFzcy5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MgJiYgc3VwZXJDbGFzcy5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHN1YkNsYXNzLCBlbnVtZXJhYmxlOiBmYWxzZSwgd3JpdGFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSB9IH0pOyBpZiAoc3VwZXJDbGFzcykgT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mKHN1YkNsYXNzLCBzdXBlckNsYXNzKSA6IHN1YkNsYXNzLl9fcHJvdG9fXyA9IHN1cGVyQ2xhc3M7IH1cblxudmFyIExpbmsgPSBmdW5jdGlvbiAoX1JlYWN0JENvbXBvbmVudCkge1xuICBfaW5oZXJpdHMoTGluaywgX1JlYWN0JENvbXBvbmVudCk7XG5cbiAgZnVuY3Rpb24gTGluaygpIHtcbiAgICB2YXIgX3RlbXAsIF90aGlzLCBfcmV0O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIExpbmspO1xuXG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZXQgPSAoX3RlbXAgPSAoX3RoaXMgPSBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0aGlzLCBfUmVhY3QkQ29tcG9uZW50LmNhbGwuYXBwbHkoX1JlYWN0JENvbXBvbmVudCwgW3RoaXNdLmNvbmNhdChhcmdzKSkpLCBfdGhpcyksIF90aGlzLmhhbmRsZUNsaWNrID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICBpZiAoX3RoaXMucHJvcHMub25DbGljaykgX3RoaXMucHJvcHMub25DbGljayhldmVudCk7XG5cbiAgICAgIGlmICghZXZlbnQuZGVmYXVsdFByZXZlbnRlZCAmJiAvLyBvbkNsaWNrIHByZXZlbnRlZCBkZWZhdWx0XG4gICAgICAhX3RoaXMucHJvcHMudGFyZ2V0ICYmIC8vIGxldCBicm93c2VyIGhhbmRsZSBcInRhcmdldD1fYmxhbmtcIiBldGMuXG4gICAgICAhaXNNb2RpZmllZEV2ZW50KGV2ZW50KSAmJiBpc0xlZnRDbGlja0V2ZW50KGV2ZW50KSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBfdGhpcy5oYW5kbGVUcmFuc2l0aW9uKCk7XG4gICAgICB9XG4gICAgfSwgX3RoaXMuaGFuZGxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciByb3V0ZXIgPSBfdGhpcy5jb250ZXh0LnJvdXRlcjtcbiAgICAgIHZhciBfdGhpcyRwcm9wcyA9IF90aGlzLnByb3BzO1xuICAgICAgdmFyIHRvID0gX3RoaXMkcHJvcHMudG87XG4gICAgICB2YXIgcmVwbGFjZSA9IF90aGlzJHByb3BzLnJlcGxhY2U7XG5cbiAgICAgIHZhciBuYXZpZ2F0ZSA9IHJlcGxhY2UgPyByb3V0ZXIucmVwbGFjZVdpdGggOiByb3V0ZXIudHJhbnNpdGlvblRvO1xuICAgICAgbmF2aWdhdGUodG8pO1xuICAgIH0sIF90ZW1wKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oX3RoaXMsIF9yZXQpO1xuICB9XG5cbiAgTGluay5wcm90b3R5cGUucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgdmFyIHJvdXRlciA9IHRoaXMuY29udGV4dC5yb3V0ZXI7XG4gICAgdmFyIF9wcm9wcyA9IHRoaXMucHJvcHM7XG4gICAgdmFyIHRvID0gX3Byb3BzLnRvO1xuICAgIHZhciBzdHlsZSA9IF9wcm9wcy5zdHlsZTtcbiAgICB2YXIgYWN0aXZlU3R5bGUgPSBfcHJvcHMuYWN0aXZlU3R5bGU7XG4gICAgdmFyIGNsYXNzTmFtZSA9IF9wcm9wcy5jbGFzc05hbWU7XG4gICAgdmFyIGFjdGl2ZUNsYXNzTmFtZSA9IF9wcm9wcy5hY3RpdmVDbGFzc05hbWU7XG4gICAgdmFyIHByb3BMb2NhdGlvbiA9IF9wcm9wcy5sb2NhdGlvbjtcbiAgICB2YXIgZ2V0SXNBY3RpdmUgPSBfcHJvcHMuaXNBY3RpdmU7XG4gICAgdmFyIGFjdGl2ZU9ubHlXaGVuRXhhY3QgPSBfcHJvcHMuYWN0aXZlT25seVdoZW5FeGFjdDtcbiAgICB2YXIgcmVwbGFjZSA9IF9wcm9wcy5yZXBsYWNlO1xuICAgIHZhciBjaGlsZHJlbiA9IF9wcm9wcy5jaGlsZHJlbjtcblxuICAgIHZhciByZXN0ID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKF9wcm9wcywgWyd0bycsICdzdHlsZScsICdhY3RpdmVTdHlsZScsICdjbGFzc05hbWUnLCAnYWN0aXZlQ2xhc3NOYW1lJywgJ2xvY2F0aW9uJywgJ2lzQWN0aXZlJywgJ2FjdGl2ZU9ubHlXaGVuRXhhY3QnLCAncmVwbGFjZScsICdjaGlsZHJlbiddKTtcblxuICAgIHZhciBhcGF0aGV0aWNUb0lzQWN0aXZlID0gYWN0aXZlQ2xhc3NOYW1lID09PSAnJyAmJiBPYmplY3Qua2V5cyhhY3RpdmVTdHlsZSkubGVuZ3RoID09PSAwICYmIHR5cGVvZiBjaGlsZHJlbiAhPT0gJ2Z1bmN0aW9uJztcblxuICAgIGlmIChhcGF0aGV0aWNUb0lzQWN0aXZlKSB7XG4gICAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoJ2EnLCBfZXh0ZW5kcyh7XG4gICAgICAgIGhyZWY6IHJvdXRlciA/IHJvdXRlci5jcmVhdGVIcmVmKHRvKSA6IHRvLFxuICAgICAgICBvbkNsaWNrOiB0aGlzLmhhbmRsZUNsaWNrLFxuICAgICAgICBzdHlsZTogc3R5bGUsXG4gICAgICAgIGNsYXNzTmFtZTogY2xhc3NOYW1lLFxuICAgICAgICBjaGlsZHJlbjogY2hpbGRyZW5cbiAgICAgIH0sIHJlc3QpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX3JlYWN0Mi5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXG4gICAgICBfQnJvYWRjYXN0cy5Mb2NhdGlvblN1YnNjcmliZXIsXG4gICAgICBudWxsLFxuICAgICAgZnVuY3Rpb24gKGNvbnRleHRMb2NhdGlvbikge1xuICAgICAgICB2YXIgbG9jYXRpb24gPSBwcm9wTG9jYXRpb24gfHwgY29udGV4dExvY2F0aW9uO1xuXG4gICAgICAgIHZhciBpc0FjdGl2ZSA9IGdldElzQWN0aXZlKGxvY2F0aW9uLCBjcmVhdGVMb2NhdGlvbkRlc2NyaXB0b3IodG8pLCBfdGhpczIucHJvcHMpO1xuXG4gICAgICAgIC8vIElmIGNoaWxkcmVuIGlzIGEgZnVuY3Rpb24sIHdlIGFyZSB1c2luZyBhIEZ1bmN0aW9uIGFzIENoaWxkcmVuIENvbXBvbmVudFxuICAgICAgICAvLyBzbyB1c2VmdWwgdmFsdWVzIHdpbGwgYmUgcGFzc2VkIGRvd24gdG8gdGhlIGNoaWxkcmVuIGZ1bmN0aW9uLlxuICAgICAgICBpZiAodHlwZW9mIGNoaWxkcmVuID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICByZXR1cm4gY2hpbGRyZW4oe1xuICAgICAgICAgICAgaXNBY3RpdmU6IGlzQWN0aXZlLFxuICAgICAgICAgICAgbG9jYXRpb246IGxvY2F0aW9uLFxuICAgICAgICAgICAgaHJlZjogcm91dGVyID8gcm91dGVyLmNyZWF0ZUhyZWYodG8pIDogdG8sXG4gICAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBfdGhpczIuaGFuZGxlVHJhbnNpdGlvblxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWF5YmUgd2Ugc2hvdWxkIHVzZSA8TWF0Y2g+IGhlcmU/IE5vdCBzdXJlIGhvdyB0aGUgY3VzdG9tIGBpc0FjdGl2ZWBcbiAgICAgICAgLy8gcHJvcCB3b3VsZCBzaGFrZSBvdXQsIGFsc28sIHRoaXMgY2hlY2sgaGFwcGVucyBhIExPVCBzbyBtYXliZSBpdHMgZ29vZFxuICAgICAgICAvLyB0byBvcHRpbWl6ZSBoZXJlIHcvIGEgZmFzdGVyIGlzQWN0aXZlIGNoZWNrLCBzbyB3ZSdkIG5lZWQgdG8gYmVuY2htYXJrXG4gICAgICAgIC8vIGFueSBhdHRlbXB0IGF0IGNoYW5naW5nIHRvIHVzZSA8TWF0Y2g+XG4gICAgICAgIHJldHVybiBfcmVhY3QyLmRlZmF1bHQuY3JlYXRlRWxlbWVudCgnYScsIF9leHRlbmRzKHtcbiAgICAgICAgICBocmVmOiByb3V0ZXIgPyByb3V0ZXIuY3JlYXRlSHJlZih0bykgOiB0byxcbiAgICAgICAgICBvbkNsaWNrOiBfdGhpczIuaGFuZGxlQ2xpY2ssXG4gICAgICAgICAgc3R5bGU6IGlzQWN0aXZlID8gX2V4dGVuZHMoe30sIHN0eWxlLCBhY3RpdmVTdHlsZSkgOiBzdHlsZSxcbiAgICAgICAgICBjbGFzc05hbWU6IGlzQWN0aXZlID8gW2NsYXNzTmFtZSwgYWN0aXZlQ2xhc3NOYW1lXS5qb2luKCcgJykudHJpbSgpIDogY2xhc3NOYW1lLFxuICAgICAgICAgIGNoaWxkcmVuOiBjaGlsZHJlblxuICAgICAgICB9LCByZXN0KSk7XG4gICAgICB9XG4gICAgKTtcbiAgfTtcblxuICByZXR1cm4gTGluaztcbn0oX3JlYWN0Mi5kZWZhdWx0LkNvbXBvbmVudCk7XG5cbkxpbmsuZGVmYXVsdFByb3BzID0ge1xuICByZXBsYWNlOiBmYWxzZSxcbiAgYWN0aXZlT25seVdoZW5FeGFjdDogZmFsc2UsXG4gIGNsYXNzTmFtZTogJycsXG4gIGFjdGl2ZUNsYXNzTmFtZTogJycsXG4gIHN0eWxlOiB7fSxcbiAgYWN0aXZlU3R5bGU6IHt9LFxuICBpc0FjdGl2ZTogZnVuY3Rpb24gaXNBY3RpdmUobG9jYXRpb24sIHRvLCBwcm9wcykge1xuICAgIHJldHVybiBwYXRoSXNBY3RpdmUodG8ucGF0aG5hbWUsIGxvY2F0aW9uLnBhdGhuYW1lLCBwcm9wcy5hY3RpdmVPbmx5V2hlbkV4YWN0KSAmJiBxdWVyeUlzQWN0aXZlKHRvLnF1ZXJ5LCBsb2NhdGlvbi5xdWVyeSk7XG4gIH1cbn07XG5MaW5rLmNvbnRleHRUeXBlcyA9IHtcbiAgcm91dGVyOiBfUHJvcFR5cGVzLnJvdXRlckNvbnRleHRcbn07XG5cblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgTGluay5wcm9wVHlwZXMgPSB7XG4gICAgdG86IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLnN0cmluZywgX3JlYWN0LlByb3BUeXBlcy5vYmplY3RdKS5pc1JlcXVpcmVkLFxuICAgIHJlcGxhY2U6IF9yZWFjdC5Qcm9wVHlwZXMuYm9vbCxcbiAgICBhY3RpdmVTdHlsZTogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgYWN0aXZlQ2xhc3NOYW1lOiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsb2NhdGlvbjogX3JlYWN0LlByb3BUeXBlcy5vYmplY3QsXG4gICAgYWN0aXZlT25seVdoZW5FeGFjdDogX3JlYWN0LlByb3BUeXBlcy5ib29sLFxuICAgIGlzQWN0aXZlOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmMsXG4gICAgY2hpbGRyZW46IF9yZWFjdC5Qcm9wVHlwZXMub25lT2ZUeXBlKFtfcmVhY3QuUHJvcFR5cGVzLm5vZGUsIF9yZWFjdC5Qcm9wVHlwZXMuZnVuY10pLFxuXG4gICAgLy8gcHJvcHMgd2UgaGF2ZSB0byBkZWFsIHdpdGggYnV0IGFyZW4ndCBuZWNlc3NhcmlseVxuICAgIC8vIHBhcnQgb2YgdGhlIExpbmsgQVBJXG4gICAgc3R5bGU6IF9yZWFjdC5Qcm9wVHlwZXMub2JqZWN0LFxuICAgIGNsYXNzTmFtZTogX3JlYWN0LlByb3BUeXBlcy5zdHJpbmcsXG4gICAgdGFyZ2V0OiBfcmVhY3QuUHJvcFR5cGVzLnN0cmluZyxcbiAgICBvbkNsaWNrOiBfcmVhY3QuUHJvcFR5cGVzLmZ1bmNcbiAgfTtcbn1cblxuLy8gd2Ugc2hvdWxkIHByb2JhYmx5IHVzZSBMb2NhdGlvblV0aWxzLmNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvclxudmFyIGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvciA9IGZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uRGVzY3JpcHRvcih0bykge1xuICByZXR1cm4gKHR5cGVvZiB0byA9PT0gJ3VuZGVmaW5lZCcgPyAndW5kZWZpbmVkJyA6IF90eXBlb2YodG8pKSA9PT0gJ29iamVjdCcgPyB0byA6IHsgcGF0aG5hbWU6IHRvIH07XG59O1xuXG52YXIgcGF0aElzQWN0aXZlID0gZnVuY3Rpb24gcGF0aElzQWN0aXZlKHRvLCBwYXRobmFtZSwgYWN0aXZlT25seVdoZW5FeGFjdCkge1xuICByZXR1cm4gYWN0aXZlT25seVdoZW5FeGFjdCA/IHBhdGhuYW1lID09PSB0byA6IHBhdGhuYW1lLmluZGV4T2YodG8pID09PSAwO1xufTtcblxudmFyIHF1ZXJ5SXNBY3RpdmUgPSBmdW5jdGlvbiBxdWVyeUlzQWN0aXZlKHF1ZXJ5LCBhY3RpdmVRdWVyeSkge1xuICBpZiAoYWN0aXZlUXVlcnkgPT0gbnVsbCkgcmV0dXJuIHF1ZXJ5ID09IG51bGw7XG5cbiAgaWYgKHF1ZXJ5ID09IG51bGwpIHJldHVybiB0cnVlO1xuXG4gIHJldHVybiBkZWVwRXF1YWwocXVlcnksIGFjdGl2ZVF1ZXJ5KTtcbn07XG5cbnZhciBpc0xlZnRDbGlja0V2ZW50ID0gZnVuY3Rpb24gaXNMZWZ0Q2xpY2tFdmVudChldmVudCkge1xuICByZXR1cm4gZXZlbnQuYnV0dG9uID09PSAwO1xufTtcblxudmFyIGlzTW9kaWZpZWRFdmVudCA9IGZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudCkge1xuICByZXR1cm4gISEoZXZlbnQubWV0YUtleSB8fCBldmVudC5hbHRLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSk7XG59O1xuXG52YXIgZGVlcEVxdWFsID0gZnVuY3Rpb24gZGVlcEVxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT0gYikgcmV0dXJuIHRydWU7XG5cbiAgaWYgKGEgPT0gbnVsbCB8fCBiID09IG51bGwpIHJldHVybiBmYWxzZTtcblxuICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KGIpICYmIGEubGVuZ3RoID09PSBiLmxlbmd0aCAmJiBhLmV2ZXJ5KGZ1bmN0aW9uIChpdGVtLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGRlZXBFcXVhbChpdGVtLCBiW2luZGV4XSk7XG4gICAgfSk7XG4gIH1cblxuICBpZiAoKHR5cGVvZiBhID09PSAndW5kZWZpbmVkJyA/ICd1bmRlZmluZWQnIDogX3R5cGVvZihhKSkgPT09ICdvYmplY3QnKSB7XG4gICAgZm9yICh2YXIgcCBpbiBhKSB7XG4gICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChhLCBwKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGFbcF0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYltwXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoYiwgcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIGlmICghZGVlcEVxdWFsKGFbcF0sIGJbcF0pKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIHJldHVybiBTdHJpbmcoYSkgPT09IFN0cmluZyhiKTtcbn07XG5cbmV4cG9ydHMuZGVmYXVsdCA9IExpbms7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3JlYWN0LXJvdXRlci9MaW5rLmpzXG4vLyBtb2R1bGUgaWQgPSAzNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICdjb21wb25lbnRzL0hlYWRlcidcblxuZXhwb3J0IGNsYXNzIEhvbWUgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEhvbWVcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvY29udGFpbmVycy9Ib21lL2luZGV4LmpzIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIucm9vdF9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18zT1hheSB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHggNDBweDtcXG4gIHotaW5kZXg6IDQwO1xcbiAgdG9wOiAxMHB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XFxufVxcblxcbi5icmFuZF9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX196ZXN3eiB7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuLmltZ19fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18ySm9TTSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogYXV0bztcXG4gIG1hcmdpbi10b3A6IDcuNXB4O1xcbiAgY29sb3I6ICMzMzdhYjc7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLmxpbmtzX19hcHAtY29tcG9uZW50cy1IZWFkZXItc3R5bGVfX25FUEc0IHtcXG4gIGZsb2F0OiByaWdodDtcXG59XFxuXFxuLm5hdl9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18zMlZsWSB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tdG9wOiA0cHggMjBweCAwIGF1dG87XFxuICBwYWRkaW5nLWxlZnQ6IDA7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5saW5rX19hcHAtY29tcG9uZW50cy1IZWFkZXItc3R5bGVfXzFZYURhIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsZXR0ZXItc3BhY2luZzogMHB4O1xcbiAgbWFyZ2luOiAxNHB4IDEzcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBmb250LWZhbWlseTogJ0F2ZW5pciBOZXh0Jywgc2Fucy1zZXJpZjtcXG4gIHBhZGRpbmc6IDVweCA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuLnBpbGxfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fMl85TEEge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXI6IDJweCBzb2xpZCB3aGl0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIycHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIHBhZGRpbmc6IDhweCAyNXB4O1xcbiAgbWFyZ2luOiAxMHB4IDEzcHg7XFxuICBmb250LXNpemU6IDE1cHg7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtZmFtaWx5OiAnQXZlbmlyIE5leHQnLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ud2F2ZXNfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fOUQycEUge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIHotaW5kZXg6IDE7XFxuICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xcbiAgbGluZS1oZWlnaHQ6IDEuNDI4NTcxNDM7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiBub25lO1xcbiAgd2lsbC1jaGFuZ2U6IG9wYWNpdHksIHRyYW5zZm9ybTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG59XFxuXFxuLmJ0bl9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX19Bcm5rVSB7XFxufVxcblxcbi5idG5fX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fQXJua1U6aG92ZXIsIC5idG5fX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fQXJua1U6Zm9jdXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAgIzIwNWZkYztcXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL2FwcC9jb21wb25lbnRzL0hlYWRlci9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osVUFBVTtFQUNWLDBCQUEwQjtFQUMxQix1QkFBdUI7Q0FDeEI7O0FBRUQ7RUFDRSxZQUFZO0NBQ2I7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw4QkFBOEI7Q0FDL0I7O0FBRUQ7RUFDRSxhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsNEJBQTRCO0VBQzVCLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLHVDQUF1QztFQUN2QyxpQkFBaUI7RUFDakIsOEJBQThCO0NBQy9COztBQUVEO0VBQ0UsOEJBQThCO0VBQzlCLHdCQUF3QjtFQUN4QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osdUNBQXVDO0NBQ3hDOztBQUVEO0VBQ0Usc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsV0FBVztFQUNYLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGdDQUFnQztFQUNoQywwQkFBa0I7S0FBbEIsdUJBQWtCO01BQWxCLHNCQUFrQjtVQUFsQixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQiwrQkFBMkI7TUFBM0IsMkJBQTJCO0NBQzVCOztBQUVEO0NBR0M7O0FBRUQ7RUFDRSx1QkFBdUI7RUFDdkIsZ0JBQWdCO0NBQ2pCXCIsXCJmaWxlXCI6XCJzdHlsZS5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnJvb3Qge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAxMHB4IDQwcHg7XFxuICB6LWluZGV4OiA0MDtcXG4gIHRvcDogMTBweDtcXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xcbn1cXG5cXG4uYnJhbmQge1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbi5pbWcge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IGF1dG87XFxuICBtYXJnaW4tdG9wOiA3LjVweDtcXG4gIGNvbG9yOiAjMzM3YWI3O1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5saW5rcyB7XFxuICBmbG9hdDogcmlnaHQ7XFxufVxcblxcbi5uYXYge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLXRvcDogNHB4IDIwcHggMCBhdXRvO1xcbiAgcGFkZGluZy1sZWZ0OiAwO1xcbiAgbGlzdC1zdHlsZTogbm9uZTtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4ubGluayB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBjb2xvcjogd2hpdGU7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDBweDtcXG4gIG1hcmdpbjogMTRweCAxM3B4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgZm9udC1mYW1pbHk6ICdBdmVuaXIgTmV4dCcsIHNhbnMtc2VyaWY7XFxuICBwYWRkaW5nOiA1cHggNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcblxcbi5waWxsIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyOiAycHggc29saWQgd2hpdGU7XFxuICBib3JkZXItcmFkaXVzOiAyMnB4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIGxldHRlci1zcGFjaW5nOiAwcHg7XFxuICBwYWRkaW5nOiA4cHggMjVweDtcXG4gIG1hcmdpbjogMTBweCAxM3B4O1xcbiAgZm9udC1zaXplOiAxNXB4O1xcbiAgY29sb3I6ICNmZmY7XFxuICBmb250LWZhbWlseTogJ0F2ZW5pciBOZXh0Jywgc2Fucy1zZXJpZjtcXG59XFxuXFxuLndhdmVzIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICB6LWluZGV4OiAxO1xcbiAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjQyODU3MTQzO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogbm9uZTtcXG4gIHdpbGwtY2hhbmdlOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi5idG4ge1xcbiAgY29tcG9zZXM6IHBpbGw7XFxuICBjb21wb3Nlczogd2F2ZXM7XFxufVxcblxcbi5idG46aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gIGNvbG9yOiAgIzIwNWZkYztcXG59XCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5leHBvcnRzLmxvY2FscyA9IHtcblx0XCJyb290XCI6IFwicm9vdF9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18zT1hheVwiLFxuXHRcImJyYW5kXCI6IFwiYnJhbmRfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9femVzd3pcIixcblx0XCJpbWdcIjogXCJpbWdfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fMkpvU01cIixcblx0XCJsaW5rc1wiOiBcImxpbmtzX19hcHAtY29tcG9uZW50cy1IZWFkZXItc3R5bGVfX25FUEc0XCIsXG5cdFwibmF2XCI6IFwibmF2X19hcHAtY29tcG9uZW50cy1IZWFkZXItc3R5bGVfXzMyVmxZXCIsXG5cdFwibGlua1wiOiBcImxpbmtfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fMVlhRGFcIixcblx0XCJwaWxsXCI6IFwicGlsbF9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18yXzlMQVwiLFxuXHRcIndhdmVzXCI6IFwid2F2ZXNfX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fOUQycEVcIixcblx0XCJidG5cIjogXCJidG5fX2FwcC1jb21wb25lbnRzLUhlYWRlci1zdHlsZV9fQXJua1UgcGlsbF9fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX18yXzlMQSB3YXZlc19fYXBwLWNvbXBvbmVudHMtSGVhZGVyLXN0eWxlX185RDJwRVwiXG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP2xvY2FsSWRlbnROYW1lPVtsb2NhbF1fX1twYXRoXVtuYW1lXV9fW2hhc2g6YmFzZTY0OjVdJm1vZHVsZXMmaW1wb3J0TG9hZGVycz0xJnNvdXJjZU1hcCEuL34vcG9zdGNzcy1sb2FkZXIhLi9hcHAvY29tcG9uZW50cy9IZWFkZXIvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9