// export { Haiku };

export class Haiku {
  constructor(input1, input2, input3) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }

  subtractSilentVowels(inputWord) {
    let letters = [];
    letters = inputWord.split("");
    if (letters[letters.length-1] === "e"){
      letters.pop();
    }
    return letters;
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

  removeDip(inputWord) {
    let letters = [];
    letters = inputWord.split("");
    let count = 0;
    for (let i =0; i < letters.length; i++) {
      if (letters[i].match(/[aeiouAEIOU]/) && letters[i+1].match(/[aeiouAEIOU]/)) {
        count -= 1;
      }
    }
    return count;
  }

} //end of Haiku class
