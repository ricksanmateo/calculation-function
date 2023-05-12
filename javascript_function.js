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
  const addResult = add(1,3)
  const expected = 4
  if (addResult === expected) {
    console.log("Add Function passed!")
  } else {
    console.log("Add Function fail!")
  }
}

// 2. subtract function
function test2() {
  const subtractResult = subtract(3,1)
  const expected = 2
  if (subtractResult === expected) {
    console.log("Subtract Function passed!")
  } else {
    console.log("Subtract Function fail!")
  }
}

// 3. multiply function
function test3() {
  const subtractResult = multiply(3,3)
  const expected = 9
  if (subtractResult === expected) {
    console.log("multiply Function passed!")
  } else {
    console.log("multiply Function fail!")
  }
}

// 3. divide function
function test4() {
  const subtractResult = divide(3,3)
  const expected = 1
  if (subtractResult === expected) {
    console.log("divide Function passed!")
  } else {
    console.log("divide Function fail!")
  }
}

test1()
test2()
test3()
test4()
