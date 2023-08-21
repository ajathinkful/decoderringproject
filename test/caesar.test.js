// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar.js");

describe("caesar()", () => {
  it("should return false if the shift value is invalid", () => {
    expect(caesar("abc", 0)).to.be.false;
    expect(caesar("abc", -26)).to.be.false;
    expect(caesar("abc", 26)).to.be.false;
    expect(caesar("abc")).to.be.false;
  });

  it("should ignore capital letters", () => {
    expect(caesar("A Message", 3)).to.equal(caesar("a message", 3));
  });

  it("should handle shifts that wrap around the alphabet", () => {
    expect(caesar("z", 3)).to.equal("c");
  });

  it("should maintain spaces and symbols", () => {
    const input = "Hello, World!";
    const encoded = caesar(input, 5);
    const decoded = caesar(encoded, 5, false);
    expect(decoded).to.equal(input.toLowerCase());
  });
});
