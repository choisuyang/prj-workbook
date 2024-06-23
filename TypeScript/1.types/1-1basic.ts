{
  const num: number = 4;
  const str: string = "sdfad";
  const bol: boolean = true;

  let unf: undefined;
  let unf2: string | undefined;
  unf2 = undefined;
  unf2 = "stg";

  // null x

  let per: null;
  let per2: string | null;
  per2 = null;
  per2 = "str";

  // unknown x
  let un: unknown;
  un = 23;
  un = "sdfsf";

  // any

  let any: any;
  any = 0;
  any = "str";

  // void

  function print(): void {
    console.log("void");
    return;
  }

  //never (함수에 리턴이 절대 없는경우에 사용)

  //object

  let obj: object;
  function test(obj: object) {}
  test({ hi: "hello" });
}
