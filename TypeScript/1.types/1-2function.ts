{
  // js

  // function jsAdd(num1, num2) {
  //   return num1 + num2;
  // }

  //ts

  // function tsAdd(num1: number, num2: number): number {
  //   return num1 + num2;
  // }

  // // js
  // function fetch(id) {
  //   return new Promise((res, rej) => {
  //     res(100);
  //   });
  // }

  // ts
  // function tsFetch(id: string | undefined): Promise<number> {
  //   return new Promise((res, rej) => {
  //     res(100);
  //   });
  // }

  function printName(firstName: string, lastName?: string) {
    console.log(firstName + lastName);
  }

  printName("dav", "sdf");
  printName("sdf");

  //default parameter

  function printMessage(message: string = "default") {
    console.log(message);
  }

  printMessage();

  // rest parameter

  function addNumbers(...numbers: number[]): number {
    return numbers.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2, 3));
  console.log(addNumbers(1, 2, 3, 4, 5));
}
