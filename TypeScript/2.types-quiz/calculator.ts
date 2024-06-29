/**
 * Let's make a calculator 🧮
 */

type Command = "add" | "substract" | "multiply" | "divide" | "remainder";

function calculate(command: Command, fir: number, sec: number): number {
  switch (command) {
    case "add":
      return fir + sec;
    case "substract":
      return fir - sec;
    case "multiply":
      return fir * sec;
    case "divide":
      return fir / sec;
    case "remainder":
      return fir % sec;
    default:
      throw Error("unkowned");
  }
}

console.log(calculate("add", 1, 3)); // 4
console.log(calculate("substract", 3, 1)); // 2
console.log(calculate("multiply", 4, 2)); // 8
console.log(calculate("divide", 4, 2)); // 2
console.log(calculate("remainder", 5, 2)); // 1
