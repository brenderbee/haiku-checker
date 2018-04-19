import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

import { Haiku } from './haiku.js';

$(document).ready(function(){
  $("#haiku-form").submit(function(event){
    event.preventDefault();

    let input1 = $("#sentence1").val();
    let input2 = $("#sentence2").val();
    let input3 = $("#sentence3").val();

    let haikuTest = new Haiku(input1, input2, input3);

    let totalVowels1 = haikuTest.countVowels(haikuTest.input1) + haikuTest.subtractSilentVowels(haikuTest.input1) + haikuTest.removeDip(haikuTest.input1);
    let totalVowels2 = haikuTest.countVowels(haikuTest.input2) + haikuTest.subtractSilentVowels(haikuTest.input2) + haikuTest.removeDip(haikuTest.input2);

    let totalVowels3 = haikuTest.countVowels(haikuTest.input3) + haikuTest.subtractSilentVowels(haikuTest.input3) + haikuTest.removeDip(haikuTest.input3);

    if ( totalVowels1 === 5 && totalVowels2 === 7 && totalVowels3 === 5) {
      let result = "Congratulations, your poem is a Haiku!";
      $("#user-output").text(result);
    } else {
      let result = "Sorry, your poem is not a Haiku!";
      $("#user-output").text(result);
    }
  });
});
