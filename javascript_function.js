// functions
function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  return num1 / num2;
}

// manual testing

// 1. add Function
function test1() {
  const addResult = add(1, 3);
  const expected = 4;
  console.assert(
    addResult == expected,
    `Check add function expected: ${expected} result: ${addResult}`
  );
}

// 2. subtract function
function test2() {
  const subtractResult = subtract(3,1)
  const expected = 2
  console.assert(
    subtractResult == expected,
    `Check subtract function expected: ${expected} result: ${subtractResult}`
  )
}

// 3. multiply function
function test3() {
  const multiplyResult = multiply(3,3)
  const expected = 9
  console.assert(
    multiplyResult == expected,
    `Check subtract function expected: ${expected} result: ${multiplyResult}`
  )
}

// 3. divide function
function test4() {
  const divideResult = divide(3,3)
  const expected = 1
  console.assert(
    divideResult == expected,
    `Check subtract function expected: ${expected} result: ${divideResult}`
  )
}

// The console.assert() writes an error message to the console if the assertion is false. 
// If the assertion is true, nothing happens.

test1()
test2()
test3()
test4()
