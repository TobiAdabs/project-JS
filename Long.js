vowels = ["a", "e", "i", "o", "u"];

function countVowels(arr) {
  array = arr.split("");
  common = vowels.filter(element => array.includes(element));
  count = common.length;
  return count;
}

console.log(countVowels("Men"))