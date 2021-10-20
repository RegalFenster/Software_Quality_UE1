var fs = require('fs');

exports.createFile = function () {

    // include node fs module
    var data ='Learn Node FS module';
    
    // writeFile function with filename, content and callback function
    if(fs.existsSync('newfile.txt')) {
        throw "file exists";
    }
    fs.writeFile('newfile.txt', data, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
    }); 
 }    


