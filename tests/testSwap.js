var chai = require("chai");
var expect = chai.expect;

require("../src/array-prototype-move.js");

var simpleArray = ["Han Solo", "Luke Skywalker", "Obi-Wan Kenobi", "Darth Vader", "Chewbacca", "C3P0", "R2D2"];


describe("[Swap] Simple array tests", function() {
    it("should move the robots to the front of the array. Swapped with Han and Luke.", function() {
        simpleArray.swap(5, 0);
        simpleArray.swap(6, 1);
        expect(simpleArray[0] === "C3P0" && simpleArray[1] === "R2D2").to.be.true;
        expect(simpleArray[5] === "Han Solo" && simpleArray[6] === "Luke Skywalker").to.be.true;
    });

    it("should move Han to the end, via a negative number. Swapped with Luke", function() {
        simpleArray.swap(5, -1);
        expect(simpleArray[6] === "Han Solo").to.be.true;
        expect(simpleArray[5] === "Luke Skywalker").to.be.true;
    });
});


var objectArray = [{ name: "Han Solo", weapon: "blaster" }, { name: "Luke Skywalker", weapon: "lightsabre" }, { name: "Obi-Wan Kenobi", weapon: "lightsabre" }, { name: "Darth Vader", weapon: "lightsabre" }, { name: "Chewbacca", weapon: "bowcaster" }, { name: "C3P0" }, { name: "R2D2" }];


describe("[Swap] Object array tests", function() {
    it("should move the robots to the front of the array", function() {
        objectArray.swap(5, 0);
        objectArray.swap(6, 1);
        expect(objectArray[0].name === "C3P0" && objectArray[1].name === "R2D2").to.be.true;
        expect(objectArray[5].name === "Han Solo" && objectArray[6].name === "Luke Skywalker").to.be.true;
    });

    it("should move Han to the end, still with his blaster, via a negative number", function() {
        objectArray.swap(5, -1);
        expect(objectArray[6].name === "Han Solo" && objectArray[6].weapon === "blaster").to.be.true;
        expect(objectArray[5].name === "Luke Skywalker" && objectArray[5].weapon === "lightsabre").to.be.true;
    });
});

var emptyArray = [];
describe("[Swap] Moving within an empty array", function() {
    it("should return the same (empty) array for a negative new number move", function() {
        emptyArray.swap(1, -1);
        expect(emptyArray).to.be.empty;
    });
});



