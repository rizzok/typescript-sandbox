interface User {
  name: string;
  age?: number;
}

const user: User = {
  name: "Kevin",
  age: 32
}

const user2: User = {
  name: "Jack"
}

console.log(user.name)