{
  // union /or

  type Direction = "right" | "left" | "up" | "down";

  function dirctionPrint(dicrtion: Direction) {
    console.log(dicrtion);
  }

  dirctionPrint("left");

  type State = "Succss" | "fail";

  function login(state: State) {
    if (state === "Succss") {
      console.log("succssee", state);
    } else {
      console.log("failed", state);
    }
  }
  login("fail");

  type SuccessState = {
    response: {
      body: string;
    };
  };

  type FailedState = {
    reaseon: string;
  };
  type LoginState = SuccessState | FailedState;
  function loginState(state: LoginState) {
    if ("response" in state) {
      console.log(`Logged in ${state.response.body}`);
    } else {
      console.log(` Faiiaiaiaii ${state.reaseon}`);
    }
  }
}
