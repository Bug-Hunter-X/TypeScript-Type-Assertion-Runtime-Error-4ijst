function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Uncommon Error: Type Assertion
let result3 = add(5, "3"); // This will compile but result in a runtime error
let result4: number = add(5, "3"); // This will compile and result in a runtime error