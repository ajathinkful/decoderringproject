const { expect } = require("chai");
const { substitution } = require("../src/substitution.js");

describe("substitution", () => {
  it("returns false if the given alphabet isn't exactly 26 characters long", () => {
    const result = substitution("message", "abc"); // Should be false
    expect(result).to.equal(false);
  });

  it("correctly translates the given phrase, based on the alphabet given to the function", () => {
    const result = substitution("message", "xoyqmcgrukswaflnthdjpzibev");
    expect(result).to.equal("amddxgm");
  });

  it("returns false if there are any duplicate characters in the given alphabet", () => {
    const result = substitution("message", "abcabcabcabcabcabcabcabcyz"); // Should be false
    expect(result).to.equal(false);
  });

  it("maintains spaces in the message, before and after encoding or decoding", () => {
    const result = substitution("my message", "xoyqmcgrukswaflnthdjpzibev");
    expect(result).to.equal("ae amddxgm");
  });

  it("ignores capital letters", () => {
    const result1 = substitution("A Message", "xoyqmcgrukswaflnthdjpzibev");
    const result2 = substitution("a message", "xoyqmcgrukswaflnthdjpzibev");
    expect(result1).to.equal(result2);
  });
});
