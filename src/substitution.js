// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(input, alphabet, encode = true) {
    // Check if the alphabet has exactly 26 unique characters
    if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) {
      return false;
    }

    const lowerInput = input.toLowerCase(); // Convert input to lowercase
    const lowerAlphabet = alphabet.toLowerCase(); // Convert the alphabet to lowercase
    const originalAlphabet = "abcdefghijklmnopqrstuvwxyz";
    const mapping = {};

    if (encode) {
      // Create the mapping for encoding
      for (let i = 0; i < 26; i++) {
        mapping[originalAlphabet[i]] = lowerAlphabet[i];
      }
    } else {
      // Create the mapping for decoding
      for (let i = 0; i < 26; i++) {
        mapping[lowerAlphabet[i]] = originalAlphabet[i];
      }
    }

    // Add space to the mapping
    mapping[" "] = " ";

    let result = "";

    for (const char of lowerInput) {
      if (mapping[char] !== undefined) {
        result += mapping[char]; // Substitute characters
      } else {
        result += char; // Maintain characters not in the substitution alphabet
      }
    }

    return result;
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
