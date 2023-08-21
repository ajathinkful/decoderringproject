// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    const lookup = {
      a: 11,
      b: 21,
      c: 31,
      d: 41,
      e: 51,
      f: 12,
      g: 22,
      h: 32,
      i: 42,
      j: 42,
      k: 52,
      l: 13,
      m: 23,
      n: 33,
      o: 43,
      p: 53,
      q: 14,
      r: 24,
      s: 34,
      t: 44,
      u: 54,
      v: 15,
      w: 25,
      x: 35,
      y: 45,
      z: 55,
    };

    const reverseLookup = {
      11: "a",
      21: "b",
      31: "c",
      41: "d",
      51: "e",
      12: "f",
      22: "g",
      32: "h",
      42: "i",
      42: "j",
      52: "k",
      13: "l",
      23: "m",
      33: "n",
      43: "o",
      53: "p",
      14: "q",
      24: "r",
      34: "s",
      44: "t",
      54: "u",
      15: "v",
      25: "w",
      35: "x",
      45: "y",
      55: "z",
    };

    function encodeMessage(message) {
      let encodedMessage = "";
      for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char === "i" || char === "j") {
          encodedMessage += "42";
        } else if (lookup[char]) {
          encodedMessage += lookup[char];
        } else {
          encodedMessage += char;
        }
      }
      return encodedMessage;
    }

    function decodeMessage(message) {
      let decodedMessage = "";
      for (let i = 0; i < message.length; i++) {
        const char = message[i];
        if (char === " ") {
          decodedMessage += " ";
          continue;
        }
        if (char === "4" && message[i + 1] === "2") {
          decodedMessage += "(i/j)";
          i++; // Skip the next character ('2')
        } else {
          const pair = char + message[i + 1];
          const decodedChar = reverseLookup[pair];
          if (decodedChar !== undefined) {
            decodedMessage += decodedChar;
          } else {
            return false;
          }
          i++;
        }
      }
      return decodedMessage;
    }

    const formattedInput = input.toLowerCase();
    if (encode) {
      return encodeMessage(formattedInput);
    } else {
      return decodeMessage(formattedInput);
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

// function encodeMessage(message) {
//   let encodedMessage = "";
//   for (const char of message) {
//     if (char === "i" || char === "j") {
//       encodedMessage += "42";
//     } else if (lookup[char]) {
//       encodedMessage += lookup[char];
//     } else {
//       encodedMessage += char;
//     }
//   }
//   return encodedMessage;
// }

// function decodeMessage(message) {
//   let decodedMessage = "";
//   for (let i = 0; i < message.length; i++) {
//     const char = message[i];
//     if (char === " ") {
//       decodedMessage += " ";
//       continue;
//     }
//     if (char === "4" && message[i + 1] === "2") {
//       decodedMessage += "(i/j)";
//       i++; // Skip the next character ('2')
//     } else {
//       const pair = char + message[i + 1];
//       const decodedChar = reverseLookup[pair];
//       if (decodedChar !== undefined) {
//         decodedMessage += decodedChar;
//       } else {
//         return false;
//       }
//       i++;
//     }
//   }
//   return decodedMessage;
// }
