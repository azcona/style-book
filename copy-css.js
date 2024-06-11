const path = require('path');
const fs = require('fs');

const cssPattern = /sw-style-.*\.([0-9|a-z]*)\.css/;

const directoryPath = path.join(__dirname, 'build/dist');
fs.readdir(directoryPath, function (err, files) {
  //handling error
  if (err) {
    return console.log('Unable to scan directory: ' + err);
  }

  files.forEach(function (file) {
    let fileDetails = fs.lstatSync(path.resolve(directoryPath, file));
    if (fileDetails.isFile()) {
      var match = file.match(cssPattern);
      if (match) {
        var unHashedFile = file.replace("."+match[1], "");
        var origin = path.join(directoryPath, file);
        var destination = path.join(directoryPath, unHashedFile);
        console.log("Copying file " + origin + " to " + destination)
         fs.copyFile(origin, destination, (error) => {
           if (error) {throw error};
           console.log("\t Done!")
        });
      }
    }
  });
});


