process.argv.forEach(function (item, index){
  //출력
  console.log(index + ':' + typeof(item) + ':', item);

  //실행 매개 변수에 --exit 있을 때
  if(item == '--exit'){
    //다음 실행 매개 변수를 얻는다
    var exitTime = Number(process.argv[index+1]);

    //일정 시간 후 프로그램 종료
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
