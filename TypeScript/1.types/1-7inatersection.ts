{
  // intersection / and

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    id: number;
    work: () => void;
  };

  function interwork(person: Student & Worker) {
    console.log(person.name, person.id, person.score, person.work);
  }

  interwork({
    name: "asdf",
    id: 13,
    score: 23,
    work: () => {},
  });
}
