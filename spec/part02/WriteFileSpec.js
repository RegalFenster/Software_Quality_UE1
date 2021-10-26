describe("FileWriter", function () {
  var writer = require("../../lib/writeFile");
  var fs = require("fs");

  //create a new file before the test and remove it afterwards
  //if the file should exist before and after the test it would also be possible to catch the 'file exists' error and then delete and create respectively 

  beforeAll(function () {
    writer.createFile();
  });

  afterAll(function () {
    fs.unlinkSync("newfile.txt");
  });

  describe("File existence", function () {
    it("Checks if file exists", function () {
      expect(fs.existsSync("newfile.txt")).toBeTruthy();
    });
  });
});
