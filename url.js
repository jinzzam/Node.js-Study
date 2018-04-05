var url = require('url');

var parsedObject = url.parse('http://www.hanb.co.kr/trackback/92925-239423-223');
var formatObject = url.format(parsedObject);
console.log(parsedObject);
console.log(formatObject);
