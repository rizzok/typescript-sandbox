type ID = number;

interface UserInterface {
  id: ID;
  pseudo: string;
}

const user1: UserInterface = {
  id: 1,
  pseudo: "Johnny92"
}

const doSomething = (): void => {
  console.log("do something");
}
