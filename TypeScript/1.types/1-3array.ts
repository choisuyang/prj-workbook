{
  // Array
  const fruit: string[] = ["apple", "banana"];

  const fruits: Array<number> = [1, 2, 3];

  function fruitPrint(friut: readonly string[]) {
    console.log("-->", friut[0]);
    friut = ["ada", "aasdfa"];
    console.log(friut);
  }

  fruitPrint(fruit);
}
