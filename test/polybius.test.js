const { expect } = require("chai");
const { polybius } = require("../src/polybius.js");

describe("polybius", () => {
  it("encodes the letters i and j to 42", () => {
    const encodedMessage = polybius("ij");
    expect(encodedMessage).to.equal("4242");
  });

  it("decodes 42 to (i/j)", () => {
    const decodedMessage = polybius("4242", false);
    expect(decodedMessage).to.equal("(i/j)(i/j)");
  });

  it("ignores capital letters", () => {
    const encodedMessage = polybius("A MESSAGE", true);
    //     const decodedMessage = polybius("A Message", false);
    const lowercaseEncoded = polybius("a message", true);
    //     const lowercaseDecoded = polybius("a message", false);

    expect(encodedMessage).to.equal(lowercaseEncoded);
    //     expect(decodedMessage).to.equal(lowercaseDecoded);
  });

  it("maintains spaces in the message", () => {
    const encodedMessage = polybius("Hello World", true);
    const decodedMessage = polybius("3251131343 2543241341", false);

    expect(encodedMessage).to.equal("3251131343 2543241341");
    expect(decodedMessage).to.equal("hello world");
  });
});
