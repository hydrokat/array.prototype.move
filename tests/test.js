var chai = require("chai");
var expect = chai.expect;

require("../src/array-prototype-move.js");

var simpleArray = ["Han Solo", "Luke Skywalker", "Obi-Wan Kenobi", "Darth Vader", "Chewbacca", "C3P0", "R2D2"];


describe("Simple array tests", function() {
    it("should move the robots to the front of the array", function() {
        console.log("simpleArray start = " + JSON.stringify(simpleArray));
        simpleArray.move(5, 0);
        simpleArray.move(6, 1);
        expect(simpleArray[0] === "C3P0" && simpleArray[1] === "R2D2").to.be.true;
    });

    it("should move Han to the end, via a negative number", function() {
        simpleArray.move(2, -1);
        expect(simpleArray[6] === "Han Solo").to.be.true;
    });
});
