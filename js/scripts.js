var puzzle = function (phrase) {
  var newString = phrase.replace(/[aeiou]/gi,'-');
  return newString;
}


$(document).ready(function(event) {
    $("form#phrases").submit(function(event){

      var puzzleString = $("input#phrase").val();
      var result = puzzle(puzzleString);


  $(".result").text(result);
  $("#result").show();
  var form = document.getElementById("phrases");
  form.reset();
  event.preventDefault();

  });
});
