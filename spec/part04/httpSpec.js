describe("HttpSpec", function () {
  const request = require("request");
  const url = "https://www.fh-joanneum.at/";

  beforeAll(function (done) {
    data = {};
    request.get(url, (err, response, body) => {
      data.body = body;
      done();
    });
  });

  describe("Search for a word at specific url", function () {
    it("Should include the word 'bibliothek'", function () {
      expect(data.body).toContain("bibliothek");
    });
  });
});
