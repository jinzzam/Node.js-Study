//���밪�� ���ϴ� �޼���
exports.abs = function (number){
  if(0 < number){
    return number;
  }else{
    return -number;
  }
};

//���� ���̸� ���ϴ� �޼���
exports.circleArea = function(radius){
  return radius * radius * Math.PI;
}
