function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

let result1 = add(5, 3); // result1 is 8
let result2 = subtract(10, 4); // result2 is 6

// Solution:  Runtime type checking
function addSafe(a: any, b: any): number {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error("Invalid input: Both arguments must be numbers");
  }
  return a + b;
}

function subtractSafe(a: any, b: any): number {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error("Invalid input: Both arguments must be numbers");
    }
    return a - b;
  }

let result3 = addSafe(5,3); // result3 is 8
let result4 = addSafe(5, "3"); // throws an error at runtime
let result5 = subtractSafe(10,4); // result5 is 6
let result6 = subtractSafe(10, "4"); // throws an error at runtime