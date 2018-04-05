//모듈 추출
var url = require('url');
var querystring = require('querystring');

var parsedObject = url.parse('http://www.hanb.co.kr/book/look.html?ibsn=92925-239423-223');
console.log(querystring.parse(parsedObject.query));
console.log(url.parse('http://www.hanb.co.kr/book/look.html?ibsn=92925-239423-223', true));
