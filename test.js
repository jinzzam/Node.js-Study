
//��������
console.log('filename : ', __filename);
console.log('dirname : ', __dirname);

//�ܼ� ��� Ư������
console.log('%d + %d = %d', 14, 33, 14+33, 2342);
console.log('%d + %d = %d %d', 14, 33, 14+33);
console.log('���ڿ� : ', 'Hello World..!', 'Ư����ȣ�� �������');
console.log('JSON : %j', {name : 'jinzzam'});

//�ð� ����
console.time('alpha');

var output = 1;
for(var i = 1; i<= 10 ;i++){
  output *= i;
}
console.log('Result : ', output);

console.timeEnd('alpha');
