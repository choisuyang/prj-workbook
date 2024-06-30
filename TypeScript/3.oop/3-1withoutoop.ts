{
  type CoffeCups = {
    shots: number;
    hasMilk: boolean;
  };

  let CoffeBeansPerShots: number = 7;

  let CoffeBeans = 0;

  function makeCoffe(shots: number): CoffeCups {
    if (CoffeBeans < shots * CoffeBeansPerShots) {
      throw new Error("Not Enought CoffeBeans");
    }
    CoffeBeans -= shots * CoffeBeansPerShots;
    return {
      shots: shots,
      hasMilk: false,
    };
  }

  CoffeBeans += 3 * CoffeBeansPerShots;

  let orderCoffe = makeCoffe(2);
  console.log("-->", orderCoffe);
}
