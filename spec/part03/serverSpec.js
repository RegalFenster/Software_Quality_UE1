describe("HelloWorldApp", function () {
  var Request = require("request");
  var baseUrl = "http://localhost:3000/";
  helloWorldServer = require("../../app/hello_world");

  describe("Server", function () {
    describe("GET / test", function () {
      var data = {};
      beforeAll(function (done) {
        Request.get(baseUrl, (error, response, body) => {
          data.statusCode = response.statusCode;
          data.body = body;
          done();
        });
      });
      it("Checks OK status", function () {
        expect(data.statusCode).toBe(200);
      });
      it("Reads Body", function () {
        expect(data.body).toBe("Hello World");
      });
    });
  });
});
