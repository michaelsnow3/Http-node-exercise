module.exports = function getHTML (options, callback) {
  var https = require('https');

  https.get(options, function (response) {
    var data = '';

    response.setEncoding('utf8');

    response.on('data', function (chunks) {
      data += chunks;
    });

    response.on ('end', function () {
      callback(data);
    });
  });
}