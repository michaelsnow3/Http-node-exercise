var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337 (html) {
  var letterChange = { a : '4', e : '3', l : '1', o : '0', s : '5', t : '7' };
  var multiChange = { 'ck' : 'x', 'er' : '0r', 'you' : 'j00' }
  var outputString = "";

  for (var i = 0; i < html.length; i++){
    var change = false;
    //check string for multiple letter cases before single letter changes
    for (var letters in multiChange) {
      var length = letters.length;
      if (html.substr(i, length) === letters) {
        outputString += multiChange[letters];
        i += length - 1;
        change = true;
      }
    }
    //check string for single letter cases
    for (var letter in letterChange) {
      if (html[i] === letter && !change) {
        outputString += letterChange[letter];
        change = true;
      }
    }
    //case for if current letter is not in either object
    if (!change) {
      outputString += html[i];
    }
  }
  console.log(outputString);
}

getHTML(requestOptions, print1337);