import { Haiku } from './../src/haiku.js';

describe('Haiku', function() {

  it('should verify if the poem has three lines', function() {
    let haikuTest = new Haiku("word1", "word2", "word3");
    expect(haikuTest.input1).toEqual("word1");
    expect(haikuTest.input2).toEqual("word2");
    expect(haikuTest.input3).toEqual("word3");
  });

  it('should return number of vowels in a single word', function() {
    let haikuTest = new Haiku("hello", "word2", "word3");
    let output = haikuTest.countVowels(haikuTest.input1);
    expect(output).toEqual(2);
  });

  it('should remove silent "e" vowel at the end of a word', function(){
    let haikuTest = new Haiku("take", "word2", "word3");
    let output = haikuTest.subtractSilentVowels(haikuTest.input1);
    expect(output).toEqual(-1);
  });

  it('will subtract 1 vowel for each diphthong in a word', function(){
    let haikuTest = new Haiku("pain", "word2", "word3");
    let totalVowels = haikuTest.countVowels(haikuTest.input1);
    let dips = haikuTest.removeDip(haikuTest.input1);
    let output = totalVowels + dips;
    expect(output).toEqual(1);
  });

  it('The program will return number of syllables in multiple words', function(){
    let haikuTest = new Haiku("hello there", "word2", "word3");
    debugger;
    let totalVowels = haikuTest.countVowels(haikuTest.input1);
    let silentVowels = haikuTest.subtractSilentVowels(haikuTest.input1);
    let dips = haikuTest.removeDip(haikuTest.input1);
    let output = totalVowels + dips + silentVowels;
    expect(output).toEqual(3);
  });

  it('The program will return number of syllables in multiple words', function(){
    let haikuTest = new Haiku("I am first with five", "word2", "word3");
    debugger;
    let totalVowels = haikuTest.countVowels(haikuTest.input1);
    console.log(totalVowels);
    let silentVowels = haikuTest.subtractSilentVowels(haikuTest.input1);
    console.log(silentVowels);
    let dips = haikuTest.removeDip(haikuTest.input1);
    console.log(dips);
    let output = totalVowels + dips + silentVowels;
    expect(output).toEqual(5);
  });
});
