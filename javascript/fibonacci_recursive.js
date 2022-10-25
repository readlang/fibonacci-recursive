function fibonacci(n) {
  // type your code here

  if (n===0) return 0;
  if (n===1) return 1;

  return ( fibonacci(n-1) + fibonacci(n-2) )

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(1));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 3");
  console.log("=>", fibonacci(4));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
