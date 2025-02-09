const fd = require('fs');

// reading files
//fs.readFile('./docs/blog12.txt', (err, data) => {
  //  if (err) {
    //    console.log(err);
   // }
   // console.log(data.toString());
// });

// console.log('last line');

// writing files
//fs.writeFile('./docs/blog1.tst', 'hello, world', () => {
  //  console.log('file was written');
// });

// fs.writeFile('./docs/blog2.tst', 'hello, world', () => {
   // console.log('file was written');
// });

// directories
if (!fs.existsSync('./assets')) {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder created');
    });
} else {
    fs.mkdir('./assets', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    })
}

// deleting files
if (!fs.existsSync('./docs/deleteme.txt')) {
    fs.mkdir('./docs/deleteme.txt', (err) => {
        if (err) {
            console.log(err);
        }
        console.log('folder deleted');
    });