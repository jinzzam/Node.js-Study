var fs = require('fs');

try {
  var data = fs.readFileSync('text.txt', 'utf-8');
  console.log(data);
} catch (e) {
  console.log(e);
}

try {
  fs.writeFile('text.txt', 'Hello World!!', 'utf-8', function(error) {
    if (error) {
      console.log(error);
    } else {
      console.log('FILE WRITE COMPLETE');
    }
  });

} catch (e) {
  console.log(e);
}
