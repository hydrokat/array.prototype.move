var chai = require("chai");
var expect = chai.expect;

require("../src/array-prototype-move.js");

var simpleArray = ["Han Solo", "Luke Skywalker", "Obi-Wan Kenobi", "Darth Vader", "Chewbacca", "C3P0", "R2D2"];


describe("[Move Element] Simple array tests", function() {
    it("should move the robots to the front of the array", function() {
        simpleArray.moveElement("Han Solo", 3);
        simpleArray.moveElement("Darth Vader", 1);
        expect(simpleArray[3] === "Han Solo" && simpleArray[1] === "Darth Vader").to.be.true;
    });

    it("should move Chewie to the end, via a negative number", function() {
        simpleArray.moveElement("Chewbacca", -1);
        expect(simpleArray[6] === "Chewbacca").to.be.true;
    });
});


var objectArray = [{ name: "Han Solo", weapon: "blaster" }, { name: "Luke Skywalker", weapon: "lightsabre" }, { name: "Obi-Wan Kenobi", weapon: "lightsabre" }, { name: "Darth Vader", weapon: "lightsabre" }, { name: "Chewbacca", weapon: "bowcaster" }, { name: "C3P0" }, { name: "R2D2" }];


describe("[Move Element] Object array tests", function() {
    it("should move the Han and R2 to the front of the array", function() {
        objectArray.moveElement("name:Han Solo", 0);
        objectArray.moveElement("name:R2D2", 1);
        expect(objectArray[1].name === "R2D2" && objectArray[0].name === "Han Solo").to.be.true;
    });

    it("should move Luke to the end, still with his sabre, via a negative number", function() {
        objectArray.moveElement("name:Luke Skywalker", -1);
        expect(objectArray[6].name === "Luke Skywalker" && objectArray[6].weapon === "lightsabre").to.be.true;
    });
});

var emptyArray = [];
describe("[Move Element] Moving within an empty array", function() {
    it("should return the same (empty) array for a negative new number move", function() {
        emptyArray.moveElement(1, -1);
        expect(emptyArray).to.be.empty;
    });
});



