//javascript 이용해서 window객체에 load이벤트 연결하는 방법
<script>
window.addEventListener('load', function(){

});
</script>

//node.js인데 javascript의 표준 이벤트 연결 메서드를 사용함
process.addEventListener('exit', function(){

});

//node.js에서의 이벤트 연결
process.on('exit', function () {
  //프로그램이 종료될 때 이벤트 발생함
})

process.on('uncaughtException', function (error) {
  //예외가 발생할 때 이벤트 실행
});
