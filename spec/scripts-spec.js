import { Haiku } from './../src/scripts.js';

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

  // it('test if split is working', function() {
  //   let haikuTest = new Haiku("word", "word2", "word3");
  //   let output = haikuTest.countVowels(haikuTest.input1);
  //   expect(output).toEqual(["w","o","r","d"]);
  // });

});
