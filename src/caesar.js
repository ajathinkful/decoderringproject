// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  function caesar(input, shift, encode = true) {
    if (!shift || shift < -25 || shift > 25) {
      return false;
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const lookup = alphabet + alphabet;

    const inputText = input.toLowerCase();
    let result = "";

    for (let i = 0; i < inputText.length; i++) {
      const char = inputText[i];

      if (char.match(/[a-z]/)) {
        const charIndex = alphabet.indexOf(char);
        let shiftedIndex;

        if (encode) {
          shiftedIndex = charIndex + shift;
          if (shiftedIndex >= 26) {
            shiftedIndex -= 26;
          } else if (shiftedIndex < 0) {
            shiftedIndex += 26;
          }
        } else {
          shiftedIndex = charIndex - shift;
          if (shiftedIndex < 0) {
            shiftedIndex += 26;
          } else if (shiftedIndex >= 26) {
            shiftedIndex -= 26;
          }
        }

        result += lookup[shiftedIndex];
      } else {
        result += char;
      }
    }

    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
