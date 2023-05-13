const calculationFunctions = require("./javascript_function")

test("Checking for  error in add function", () => {
  expect(calculationFunctions.add(1,2)).toBe(3)
})

test("Checking for  error in subtract function", () => {
  expect(calculationFunctions.subtract(1,2)).toBe(-1)
})

test("Checking for  error in multiply function", () => {
  expect(calculationFunctions.multiply(2,2)).toBe(4)
})

test("Checking for  error in divide function", () => {
  expect(calculationFunctions.divide(2,2)).toBe(1)
})