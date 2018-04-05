process.on('exit', function() {
  console.log('bye -');
});

process.on('uncaughtException', function(error) {
  console.log('exception ^_^ throw away ^_^ ..!');
});

var count = 0;
var id = setInterval(function() {
  count++;

  //3번 실행하는 타이머 중지
  if (count == 3) {
    clearInterval(id);
  }

  //예외 강제로 발생시킴
  error.error.error();
}, 2000);
