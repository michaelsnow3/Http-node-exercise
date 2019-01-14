var https = require('https');

function getHTML (options, callback) {

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

function printHTML (html) {
  console.log(html);
}

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

getHTML(requestOptions, printHTML);