
//전역변수
console.log('filename : ', __filename);
console.log('dirname : ', __dirname);

//콘솔 출력 특수문자
console.log('%d + %d = %d', 14, 33, 14+33, 2342);
console.log('%d + %d = %d %d', 14, 33, 14+33);
console.log('문자열 : ', 'Hello World..!', '특수기호와 상관없음');
console.log('JSON : %j', {name : 'jinzzam'});

//시간 측정
console.time('alpha');

var output = 1;
for(var i = 1; i<= 10 ;i++){
  output *= i;
}
console.log('Result : ', output);

console.timeEnd('alpha');
