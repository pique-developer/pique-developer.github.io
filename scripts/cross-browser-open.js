var command = require('child_process').exec(
  (
    (process.platform === 'win32') ? 'cmd /c start' :
    (process.platform === 'darwin') ? 'open' :
    'xdg-open'
  ) + ' ' + process.argv[2]
);
command.stdout.on('data', function(data) {
  process.stdout.write(data);
});
command.stderr.on('data', function(data) {
  process.stderr.write(data);
});
command.on('error', function(err) {
  process.stderr.write(err);
});