// export { Haiku };

export class Haiku {
  constructor(input1, input2, input3) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }
  countVowels(inputWord) {
    let letters = [];
    letters = inputWord.split("");
    let count = 0;
    letters.forEach(function(letter){
      if(letter.match(/[aeiouAEIOU]/)) {
        count += 1;
      }
    });
    return count;
  }
  subtractSilentVowels(inputWord) {
    let letters = [];
    letters = inputWord.split("");
    if (letters[letters.length-1] === "e"){
    // if (letters[-1] === "e" && letters[-2].match(/[^aeiouAEIOU]/)){
      letters.pop();
    }
    return letters;
  }
}

// let haikuTest = new Haiku("word1", "word2", "word3");
// export function Haiku(input1, input2, input3) {
//     this.input1 = input1;
//     this.input2 = input2;
//     this.input3 = input3;
// }
