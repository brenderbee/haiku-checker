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
    console.log(output);
    expect(output).toEqual(["t", "a", "k"]);
  });

  // it('test if split is working', function() {
  //   let haikuTest = new Haiku("word", "word2", "word3");
  //   let output = haikuTest.countVowels(haikuTest.input1);
  //   expect(output).toEqual(["w","o","r","d"]);
  // });

});
