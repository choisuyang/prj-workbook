{
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
