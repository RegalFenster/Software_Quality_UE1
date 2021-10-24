describe("FileWriter", function () {
  var writer = require("../../lib/writeFile");
  var fs = require("fs");
  const fsPromises = require("fs").promises;

  //create new file or delete existing if the writer throws an error and then create a new one before the test runs
  beforeAll(async function () {
    try {
      writer.createFile();
    } catch {
      console.log("Delete file and create new");
      await fsPromises.unlink("newfile.txt");
      writer.createFile();
    }
  });
  describe("File existence", function () {
    it("Checks if file exists", function () {
      expect(fs.existsSync("newfile.txt")).toBeTruthy();
    });
  });
});
