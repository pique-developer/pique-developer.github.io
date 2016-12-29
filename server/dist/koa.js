'use strict';

require('babel-polyfill');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _stream = require('stream');

var _koa = require('koa');

var _koa2 = _interopRequireDefault(_koa);

var _webpack = require('webpack');

var _webpack2 = _interopRequireDefault(_webpack);

var _webpackDevMiddleware = require('webpack-dev-middleware');

var _webpackDevMiddleware2 = _interopRequireDefault(_webpackDevMiddleware);

var _webpackHotMiddleware = require('webpack-hot-middleware');

var _webpackHotMiddleware2 = _interopRequireDefault(_webpackHotMiddleware);

var _webpackConfig = require('./../webpack.config.js');

var _webpackConfig2 = _interopRequireDefault(_webpackConfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var compiler = (0, _webpack2.default)(_webpackConfig2.default);
var devMiddleware = koaDevMiddleware(compiler, {
  noInfo: true,
  silent: true,
  publicPath: '/',
  stats: 'errors-only'
});
var hotMiddleware = koaHotMiddleware(compiler);
var app = new _koa2.default();

app.use(devMiddleware);
app.use(hotMiddleware);
app.use(function (ctx) {
  var filepath = _path2.default.join(compiler.outputPath, '../index.html');
  ctx.body = _fs2.default.readFileSync(filepath).toString();
});

app.listen(3000, function (_) {
  return console.log('\n\nListening\n\n');
});

function koaDevMiddleware(compiler) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var expressDev = (0, _webpackDevMiddleware2.default)(compiler, opts);

  var waitUntilValid = function waitUntilValid(_) {
    return new Promise(function (resolve, reject) {
      return expressDev.waitUntilValid(resolve);
    });
  };

  return function () {
    var _ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return waitUntilValid();

            case 2:
              _context.next = 4;
              return expressDev(ctx.req, {
                end: function end(x) {
                  return ctx.body = x;
                },
                setHeader: ctx.set.bind(ctx)
              }, next);

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function koaDev(_x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return koaDev;
  }();
}

function koaHotMiddleware(compiler) {
  var _this = this;

  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var expressHot = (0, _webpackHotMiddleware2.default)(compiler, opts);

  return function () {
    var _ref2 = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
      var transform;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              transform = new _stream.PassThrough();

              ctx.body = transform;

              _context2.next = 4;
              return expressHot(ctx.req, {
                write: transform.write.bind(transform),
                writeHead: function writeHead(state, headers) {
                  ctx.state = state;
                  ctx.set(headers);
                }
              }, next);

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, _this);
    }));

    return function (_x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }();
}