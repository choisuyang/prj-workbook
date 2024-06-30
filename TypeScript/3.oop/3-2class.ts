{
  type CoffeCups = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeMaekr {
    static CoffeBeansPerShots: number = 7; // class level
    CoffeBeans = 0; // instatnce level
    constructor(addBeans: number) {
      this.CoffeBeans = addBeans;
    }

    makeCoffe(shots: number): CoffeCups {
      if (this.CoffeBeans < shots * CoffeMaekr.CoffeBeansPerShots) {
        throw new Error("Not Enought CoffeBeans");
      }
      this.CoffeBeans -= shots * CoffeMaekr.CoffeBeansPerShots;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  // CoffeBeans += 3 * CoffeBeansPerShots;

  // let orderCoffe = makeCoffe(2);
  // console.log("-->", orderCoffe);

  let orderCoffe2 = new CoffeMaekr(30);
  console.log(orderCoffe2.makeCoffe(3));
  console.log(orderCoffe2.CoffeBeans);
}
