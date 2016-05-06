
function fBuzz(n) {

  for (num = 1; num <= n; num++) {
  if (num % 15 == 0)
    console.log("Fizzbuzz");
  else if (num % 5 == 0)
    console.log("Buzz");
  else if (num % 3 == 0)
    console.log("Fizz");
  else 
    console.log(num);}
}

$(function() {
  $("form").on("submit", function(e) {
  	  fBuzz(this.usernum.value);
      return false;
  });
    });