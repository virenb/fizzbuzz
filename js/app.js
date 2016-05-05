function fBuzz() {
  n=prompt("Enter a num")
  n=parseInt(n)

  for (num = 1; num <= n; num++) {
  if (num % 15 == 0)
    console.log("Fizzbuzz");
  else if (num % 5 == 0)
    console.log("Buzz");
  else if (num % 3 == 0)
    console.log("Fizz");
  else 
    console.log(num);};
};

console.log(fBuzz())