function isAnagrams(sentence1, sentence2) {
    const sentence1 = sentence1.toLowerCase().split(" ").join("");
    const sentence2 = sentence2.toLowerCase().split(" ").join("");
    if (str1.length != str2.length)return false;

const total = {} ; 
for (const letter of str1){
  total[letter] = total [letter] + 1 || 1 ; 
}
for (const letter of str2){
  total[letter] = total [letter] ? total [letter] - 1 : - 1 ;
}
const differences = Object.values(total);
return differences.every((num) => num === 0 ) ; 
}
const result = isAnagrams("azdlowaazz", "azdowbazzl")
console.log("result1:", result1);