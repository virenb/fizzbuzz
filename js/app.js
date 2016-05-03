for(num = 1; num <= 100; num++ ) {
  if (num % 15 == 0)
    console.log("Fizzbuzz");
  else if (num % 5 == 0)
    console.log("Buzz");
  else if (num % 3 == 0)
    console.log("Fizz");
  else 
    console.log(num);
} 