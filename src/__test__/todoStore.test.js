import TodoStore from "../stores/todoStore";

const todoStore = new TodoStore();
const defaultItem = "default Item";

beforeEach(() => {
  todoStore.todos = [defaultItem];
  todoStore.inputValue = "";
  todoStore.targetItemIndex = undefined;
});

describe("todoStore", () => {
  it("Add item into todos", () => {
    const newItem = "new item";
    todoStore.addTodo(newItem);

    expect(todoStore.todos).toEqual([defaultItem, newItem]);
  });

  it("Add inputValue into todos", () => {
    const inputString = "new inputValue";
    todoStore.inputValue = inputString;
    todoStore.addTodo();

    expect(todoStore.todos).toEqual([defaultItem, inputString]);
    expect(todoStore.inputValue).toEqual("");
  });

  it("Select item when hovered", () => {
    const targetItem = "target Item";

    todoStore.addTodo(targetItem);
    todoStore.setTargetItem(todoStore.todos.indexOf(targetItem));

    expect(todoStore.targetItemIndex).toEqual(
      todoStore.todos.indexOf(targetItem)
    );
  });

  it("Initialize selectItemIndex when mouseLeft", () => {
    todoStore.targetItemIndex = 0;
    todoStore.setTargetItem();

    expect(todoStore.targetItemIndex).toEqual(undefined);
  });

  it("Delete item in todos", () => {
    const deleteTarget = "Item to be deleted";

    todoStore.addTodo(deleteTarget);
    todoStore.setTargetItem(todoStore.todos.indexOf(deleteTarget));
    todoStore.deleteItem();

    expect(todoStore.todos).toEqual([defaultItem]);
  });
});
