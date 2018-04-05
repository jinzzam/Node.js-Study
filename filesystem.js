var fs = require('fs');

// var text = fs.readFileSync('text.txt', 'utf-8');
// console.log(text);

var data = 'Hello World!!!';

fs.readFile('text.txt', 'utf-8', function (error, data){
  console.log(data);
})

fs.writeFile('textFileOtherWrite.txt', data, 'utf-8', function (error) {
  console.log('WRITE FILE ASYNC COMPLETE');
});

fs.writeFileSync('textFileOtherWriteSync.txt', data, 'utf-8');
console.log('WRITE FILE SYNC COMPLETE');
