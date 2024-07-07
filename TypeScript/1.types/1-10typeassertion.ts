{
  // Type Assertion

  function jsPath(): any {
    return "heeloo";
  }
  const result = jsPath();
  console.log((result as string).length);
}
