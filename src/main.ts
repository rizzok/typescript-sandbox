interface UserInterface {
  getFullname(): string
}

class User implements UserInterface {
  private firstName: string
  private lastName: string
  readonly unchangableName: string
  static readonly maxAge = 50

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName
    this.lastName = lastName
  }
  
  getFullname(): string {
    return this.firstName + ' ' + this.lastName
  }
}

class Admin extends User {
  private editor: string

  setEditor(editor: string) {
    this.editor = editor
  }

  getEditor(): string {
    return this.editor
  }
}

const user1 = new User('John', 'Doe')

const admin1 = new Admin('Titi', 'Toto')

admin1