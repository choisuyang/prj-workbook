{
  type CoffeCups = {
    shots: number;
    hasMilk: boolean;
  };

  class CoffeeMaker {
    private static CoffeBeansPerShots: number = 7; // class level
    private CoffeBeans = 0; // instatnce level
    private constructor(addBeans: number) {
      this.fillCoffeBeans(addBeans);
    }

    static makeMachine(addBeans: number): CoffeeMaker {
      return new CoffeeMaker(addBeans);
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("too small ");
      }

      this.CoffeBeans += beans;
      console.log("--->", this.CoffeBeans);
    }

    makeCoffe(shots: number): CoffeCups {
      if (this.CoffeBeans < shots * CoffeeMaker.CoffeBeansPerShots) {
        throw new Error("Not Enought CoffeBeans");
      }
      this.CoffeBeans -= shots * CoffeeMaker.CoffeBeansPerShots;
      return {
        shots: shots,
        hasMilk: false,
      };
    }
  }

  let order = CoffeeMaker.makeMachine(32);
  console.log(order.fillCoffeBeans(30));
  // CoffeBeans += 3 * CoffeBeansPerShots;

  // let orderCoffe = makeCoffe(2);
  // console.log("-->", orderCoffe);

  class User {
    get fullName(): string {
      return `${this.firstName} ${this.lastName}`;
    }

    constructor(private firstName: string, private lastName: string) {}
  }

  const user = new User("abc", "def");
  console.log(user.fullName);
  console.log("--->", user.fullName);
}
