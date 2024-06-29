{
  /**
   * Print Loading State
   */
  type LoadingState = {
    state: "loading";
  };

  type SuccessState = {
    state: "success";
    response: {
      body: string;
    };
  };

  type FailState = {
    state: "fail";
    reason: string;
  };

  type ResourceLoadState = LoadingState | SuccessState | FailState;

  function printLoginState(val: ResourceLoadState) {
    // console.log("->", val.state);
    switch (val.state) {
      case "loading":
        console.log(val.state);
        break;
      case "success":
        console.log(val.response.body);
        break;
      case "fail":
        console.log(val.reason);
        break;
      default:
        throw new Error("unkwoned");
    }
  }

  printLoginState({ state: "loading" }); // 👀 loading...
  printLoginState({ state: "success", response: { body: "loaded" } }); // 😃 loaded
  printLoginState({ state: "fail", reason: "no network" }); // 😱 no network
}
