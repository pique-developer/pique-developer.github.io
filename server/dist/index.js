'use strict';

require('babel-polyfill');

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var firebase_admin = require('firebase-admin');
firebase_admin.initializeApp({
  credential: firebase_admin.credential.cert({
    projectId: 'get-pique',
    clientEmail: 'foo@get-pique.iam.gserviceaccount.com',
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC0B+IsEYaFqi46\nkIDR1y43KdLtppbjtEnQnuK5mwTc6a6ILKZxLBbVLhLObjkLdfUMPylFpyJChlgg\nnKb/yUXXKizCnrUv73DKEwP2oKCiDJPaLZHDs2fSpdyCgDOwyvC/X7E2RjmPb7CI\nC1nRy8YnDoBrCKZnp12ejMG1WkctoG66uAzi5/ySUdw64SPbk7gXl7izyv8hiXo4\nuOXYTquBIkgv3oan5gQOSaVLooAdfhctRsj1I0IOIV2wfjBBcgVCejz/MsUc8Dg0\nltDPjUhLQWkZ08PdOZvT/EEl+E69o6GMyaahq65/wJg8I+qfUflS50E/JvDm7zYR\neWzSKI3ZAgMBAAECggEAFqpjbD7sm8l4NoFY5pJbzDAk0SzHFHXvUSefzdRZgWKe\nSaCtd9QgL8i0L28rGWlJZ7hP/ufy5UM6tyhh0hRKCbPSnNIUZ6uSnK5WMme4sY45\n0x8nmebtbFTbdUaku15hfwaSLg4bUxaxt/8N2N753JLz0gXtxWEJ5Vs9TBLIoVK6\naNzMmHebyVkUkLsmRynlzCop9rdd0tyAHjIgNKl+Loucrzb8Klz0FI66GaqNhyGn\n93LEwvG0qC/EkF1pr8oVTYxi09QRL9++8rjhay9E/uuury8xvJH+hHfzv67E102b\nTa/40pc0FP5jvE2THFOevI7TaMzTb+JvJMBIHIewgQKBgQDdfD2OTuDfZ45WFMsu\n6fSwysJd+EFYEr5s4UJXZXC7IzAIxoZ/d81IZZHOgGuOlOcS//Nm032X2TEtZIFH\nZCsLU3JelW5fBp0TboQ2yy5/syY7vPa3TUc2DFoJyO1MtlR66fKIoRA2X18aTn5M\n68yN6GrEZFuOUj34NxcdLWWeaQKBgQDQFeOpA6erHWU8rwu3v/E4EmlgyVWSwmVR\nFP8nYpZdlEe3/GuAPh3uhtfWiIyh/cV9tGxqTOI1xHwgSHOdlnNnSF2lQW+aToQT\n+U2EQ/QL8mdEO8MNIMmAerRMSWMbZ/Fmon2PC67XB9L+0nVDiosgY2UQTe06SU1F\n8ftmfCdl8QKBgQCGpCBHgmvxY2KDseBShKbbUmcV+PTANaTNS6KovmHpYVqx+v2I\nP6vrdtNMVYUNCDfwtOeieq6+wKnEjnSIkbwZBoFgPjb6TWrvhR+ar6l0t9NmPVk9\n1RyVHq0dhae8GpsAnXdy13ajlxaZR15AJJgVLFS7TsbZneVOHy9N7Wr5AQKBgEsE\niTXmnmz/RP8ysEvHhCRN5vXAv/wP30zy/+XoEgOcsJpxAySRwGK89FVglyrTfX6L\nLEbKfwcZVhKhbCUVF3fVzAUG6UA9LDqzNzIG+ZXRB0+/J9u0xVBvbE7Qak14FLyG\nujN258qYBIZfw2zdJrk/fDD7lxnbUWN1EMhq3B1RAoGBALrv9ShwwWYaQise1ElE\nbyb5oa4tmLaBii49cYEwdLpYQzDSJkuVuqShvxS4Qo03yrX+T2CHvRpoQMOr+0+H\nzkWEF7zNF66Ow+y5vpuRu8UCVNALJHHwN+0ffVGiUUYL36eTHKTTDMrdWWq1NZ07\n204R9lDNtvEjI+q1WRw9C2ex\n-----END PRIVATE KEY-----\n'
  }),
  databaseURL: 'https://get-pique.firebaseio.com'
});

var publicPath = '/';
var outputPath = path.join(__dirname, '../../build');

app.use(publicPath, express.static(outputPath));
app.use(bodyParser.json());

var stripeEndpoint = require('./api/stripeEndpoint');
app.use('/api/stripe', stripeEndpoint);

var usersEndpoint = require('./api/usersEndpoint');
app.use('/api/users', usersEndpoint);

var providersEndpoint = require('./api/providersEndpoint');
app.use('/api/providers', providersEndpoint);

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'build/index.html'));
});

app.listen(process.env.PORT || 5000);

var _temp = function () {
  if (typeof __REACT_HOT_LOADER__ === 'undefined') {
    return;
  }

  __REACT_HOT_LOADER__.register(app, 'app', 'server/src/index.js');

  __REACT_HOT_LOADER__.register(publicPath, 'publicPath', 'server/src/index.js');

  __REACT_HOT_LOADER__.register(outputPath, 'outputPath', 'server/src/index.js');
}();
