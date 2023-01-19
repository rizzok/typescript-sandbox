const addId = <T extends object>(obj: T) => {
  const id = Math.random().toString(16)
  return {
    ...obj,
    id
  }
}

interface UserInterface<T> {
  name: string
  data: T
}

const user: UserInterface<number> = {
  name: "John",
  data: 123
}

const result = addId<UserInterface<number>>(user)

console.log(result);
