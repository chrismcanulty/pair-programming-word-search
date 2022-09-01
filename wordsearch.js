const transpose = function (matrix) {
  let result = [];
  for (let i = 0; i < matrix[0].length; i++) {
    result[i] = Array(matrix.length);
  }
  for (let j = 0; j < matrix.length; j++){
    for (let k = 0; k < matrix[j].length; k++){
      result[k][j] = matrix[j][k];
    }
  }
  return result;
};

const wordSearch = (letters, word) => {
    // If there is no match, return false by default
    // let equalOrNo = false;
    // Check horizontal first
    // Edge case - if letter is not an array, return error message
    if (!Array.isArray(letters)) {
      return "No letters input, try again!";
    }
    if (letters.length === 0) {
      return "No letters input, try again!";
    }
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) {
          return true;
        }
    }
    // Check for a vertical match, using transpose function
    // Transpose the input
    // Once transposed, call horizontalJoin function

    const vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    for (x of verticalJoin) {
      if (x.includes(word)) {
        return true;
      }
  }

  // Return whether word is found or not
  return false;
};

console.log(wordSearch([], ))
// If empty array: "No letters input, try again!"

module.exports = wordSearch

// paired with @lalafang33
