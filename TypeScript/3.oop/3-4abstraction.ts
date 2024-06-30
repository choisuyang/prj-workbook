{
  type CoffeCups = {
    shots: number;
    hasMilk: boolean;
  };

  interface CoffeeMaker {
    makeCoffee(shots: number): CoffeCups;
  }

  interface CommercialCoffeMaker {
    makeCoffee(shots: number): CoffeCups;
    fillCoffeBeans(beans: number): void;
    clean(): void;
  }

  class CoffeeMachine implements CoffeeMaker, CommercialCoffeMaker {
    private static CoffeBeansPerShots: number = 7; // class level
    private CoffeBeans = 0; // instatnce level
    private constructor(addBeans: number) {
      this.fillCoffeBeans(addBeans);
    }

    static makeMachine(addBeans: number): CoffeeMachine {
      return new CoffeeMachine(addBeans);
    }

    fillCoffeBeans(beans: number) {
      if (beans < 0) {
        throw new Error("too small ");
      }

      this.CoffeBeans += beans;
      console.log("--->", this.CoffeBeans);
    }

    clean() {
      console.log("---> cleaning the machine");
    }

    private grindBeans(shots: number) {
      console.log(`Grinding Beans ${shots}....`);
      if (this.CoffeBeans < shots * CoffeeMachine.CoffeBeansPerShots) {
        throw new Error("Not Enought CoffeBeans");
      }
      this.CoffeBeans -= shots * CoffeeMachine.CoffeBeansPerShots;
    }

    private preHeat(): void {
      console.log("PRE Heating Coffee....");
    }

    private extraShot(shots: number): CoffeCups {
      console.log(`ExtraShots wait ${shots}`);
      return {
        shots: shots,
        hasMilk: false,
      };
    }

    makeCoffee(shots: number): CoffeCups {
      this.grindBeans(shots);
      this.preHeat();
      return this.extraShot(shots);
    }
  }

  //   let order: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   order.fillCoffeBeans(22);
  //   order.makeCoffee(2);

  //   let order2: CommercialCoffeMaker = CoffeeMachine.makeMachine(32);
  //   order2.fillCoffeBeans(22);
  //   order2.makeCoffee(2);
  //   order2.clean();

  // CoffeBeans += 3 * CoffeBeansPerShots;

  // let orderCoffe = makeCoffe(2);
  // console.log("-->", orderCoffe);

  class AmatureMaker {
    constructor(private machine: CoffeeMaker) {
      //   console.log("Amature-->", coffee);
    }
    makeCoffee() {
      const coffee = this.machine.makeCoffee(3);
    }
  }

  class ProMaker {
    constructor(private machine: CommercialCoffeMaker) {}
    makeCoffee() {
      const cofffee2 = this.machine.makeCoffee(3);
      //   console.log("Pro-->", cofffee2);
      this.machine.fillCoffeBeans(32);
      this.machine.clean();
    }
  }

  let maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
  //   console.log("Maker===>", maker);
  let amature = new AmatureMaker(maker);
  const pro = new ProMaker(maker);

  pro.makeCoffee();
}
