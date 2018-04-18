import { Haiku } from './../src/scripts.js';

describe('Haiku', function() {

  it('should verify if the poem has three lines', function() {
    let haikuTest = new Haiku("word1", "word2", "word3");
    expect(haikuTest.input1).toEqual("word1");
    expect(haikuTest.input2).toEqual("word2");
    expect(haikuTest.input3).toEqual("word3");
  });

});
