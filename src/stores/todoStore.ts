import React, { ChangeEvent, KeyboardEvent } from "react";
import { observable, action } from "mobx";

export type Stores = "todoStore" | "doingStore" | "completeStore";

class TodoList {
  @observable todos: string[] = [];
  @observable inputValue: string = "";
  @observable targetItemIndex: number | undefined = undefined;

  @action
  changeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target) {
      this.inputValue = e.target.value;
    }
  };

  @action
  submitInputValue = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      this.addTodo();
    }
  };

  @action
  addTodo = (target?: string) => {
    if (target) {
      this.addTargetIntoTodo(target);
    } else {
      this.addTargetIntoTodo(this.inputValue);
      this.inputValue = "";
    }
  };

  @action
  addTargetIntoTodo = (target: string) => {
    this.todos.push(target);
  };

  @action
  setTargetItem = (targetItemIndex?: number) => {
    this.targetItemIndex = targetItemIndex;
  };

  @action
  deleteItem = () => {
    if (this.targetItemIndex !== undefined) {
      return this.todos.splice(this.targetItemIndex, 1)[0];
    }
  };
}

export class TodoStore extends TodoList {}
export class DoingStore extends TodoList {}
export class CompleteStore extends TodoList {}

export default TodoStore;
