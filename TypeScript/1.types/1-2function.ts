{
  // js

  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  //ts

  function tsAdd(num1: number, num2: number): number {
    return num1 + num2;
  }

  // js
  function fetch(id) {
    return new Promise((res, rej) => {
      res(100);
    });
  }

  // ts
  function tsFetch(id: string | undefined): Promise<number> {
    return new Promise((res, rej) => {
      res(100);
    });
  }
}
