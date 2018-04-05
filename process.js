process.argv.forEach(function (item, index){
  //���
  console.log(index + ':' + typeof(item) + ':', item);

  //���� �Ű� ������ --exit ���� ��
  if(item == '--exit'){
    //���� ���� �Ű� ������ ��´�
    var exitTime = Number(process.argv[index+1]);

    //���� �ð� �� ���α׷� ����
    setTimeout(function(){
      process.exit();
    }, exitTime);
  }
});

console.log('env : ' + process.env);
console.log('version : ' + process.version);
console.log('versions' + process.versions);
console.log('arch : '+process.arch);
console.log('platform : ' + process.platform);
console.log('memoryUsage : '+process.memoryUsage());
console.log('uptime : ' + process.uptime());

console.log(process.uptime());
