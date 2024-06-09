export class Todo {
  id: number = 0;
  todo: string = '';
  completed: boolean = false;
  userId: number = 0;

  constructor(id: number, todo: string, completed: boolean, userId: number) {
    this.id = id;
    this.todo = todo;
    this.completed = completed;
    this.userId = userId;
  }

  getId() {
    return this.id;
  }

  setId(id: number) {
    this.id = id;
  }

  // all goes here

  // we can also have methods here.

  getNumbers() {
    return [1, 2, 3, 4];
  }
}
