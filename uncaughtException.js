process.on('exit', function() {
  console.log('bye -');
});

process.on('uncaughtException', function(error) {
  console.log('exception ^_^ throw away ^_^ ..!');
});

var count = 0;
var id = setInterval(function() {
  count++;

  //3�� �����ϴ� Ÿ�̸� ����
  if (count == 3) {
    clearInterval(id);
  }

  //���� ������ �߻���Ŵ
  error.error.error();
}, 2000);
