describe("Calculator", function () {
  var calculator = require("../../lib/calculator");
  var calculator2 = require("../../lib/calculator2");

  //calculator2 module doesn't calculate anything because it only returns values
  //to fix this the calculator2 module needs to implement calculation abilities
  //if the calculator2 module should not be modified the tests need to check the values the module is returning

  describe("Addition", function () {
    it("The function should add 2 numbers", function () {
      expect(calculator.add(10, 20)).toBe(30);
    });
  });
  describe("Subtraction", function () {
    it("The function should subtract 2 numbers", function () {
      expect(calculator.subtract(30, 10)).toBe(20);
    });
  });
  describe("Multiplication", function () {
    it("The function should multiply 2 numbers", function () {
      expect(calculator.multiply(1, 10)).toBe(10);
    });
  });
});
