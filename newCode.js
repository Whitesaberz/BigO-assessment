const perf = require("execution-time")();

let arr = [1, 2, 3, -3];

const addToZero = (arr) => {
  let result = false;
  for (let i = 0; i < arr.length; i++) {
    for (let u = 0; u < arr.length; u++) {
      if (arr[i] + arr[u] === 0) {
        let result = true;
        console.log(result);
        return result;
      }
    }
  }
  console.log(result);
};

perf.start();
addToZero(arr);
let resultsAddToZero = perf.stop();
console.log("Add to Zero", resultsAddToZero.preciseWords);

//Space Complexity Rating: O(n)

//---------

const hasUniqueChars = (string) => {
  let stringArr = string.split("");

  for (i = 0; i < stringArr.length; i++) {
    for (k = 0; k < stringArr.length; k++) {
      if (i !== k && stringArr[i] === stringArr[k]) {
        return false;
      }
    }
  }
  return true;
};

perf.start();
console.log(hasUniqueChars("Monday"));
let resultsUniqueChars = perf.stop();
console.log("Has Unique Chars", resultsUniqueChars.preciseWords);

//Space Complexity Rating: O(n)

//---------

let text = "The quick brown fox jumps over the lazy dog";
let text2 = "Hi my name is Woody";

const hasAllLetters = (str) => {
  let alphabet = new Set("abcdefghijklmnopqrstuvwxyz");
  for (let j of str.toLowerCase()) {
    alphabet.delete(j);
    if (alphabet.size == 0) return true;
  }
  return false;
};

perf.start();
console.log(hasAllLetters(text));
let resultsAllLetters = perf.stop();
console.log("Has All Letters", resultsAllLetters.preciseWords);
//Space Complexity Rating: O(n)

//---------

const findLongestWord = (arr) => {
  let max_str = arr[0].length;
  let answer = arr[0];
  for (i = 1; i < arr.length; i++) {
    let maxi = arr[i].length;
    if (maxi > max_str) {
      answer = arr[i];
      max_str = maxi;
    }
  }
  return answer.length;
};

perf.start();
console.log(findLongestWord(["hi", "hello", "howdy", "konnichiwa"]));
let resultsLongestWord = perf.stop();
console.log("Find Longest Word", resultsLongestWord.preciseWords);

//Space Complexity Rating: O(n)
