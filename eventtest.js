//javascript �̿��ؼ� window��ü�� load�̺�Ʈ �����ϴ� ���
<script>
window.addEventListener('load', function(){

});
</script>

//node.js�ε� javascript�� ǥ�� �̺�Ʈ ���� �޼��带 �����
process.addEventListener('exit', function(){

});

//node.js������ �̺�Ʈ ����
process.on('exit', function () {
  //���α׷��� ����� �� �̺�Ʈ �߻���
})

process.on('uncaughtException', function (error) {
  //���ܰ� �߻��� �� �̺�Ʈ ����
});
