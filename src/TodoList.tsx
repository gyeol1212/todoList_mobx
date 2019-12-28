import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";

import Section from "./components/Section";
import { inject, observer } from "mobx-react";
import TodoStore, { CompleteStore, Stores } from "./stores/todoStore";

interface IProps {
  todoStore?: TodoStore;
  doingStore?: TodoStore;
  completeStore?: TodoStore;
}

@inject("todoStore", "doingStore", "completeStore")
@observer
class TodoList extends Component<IProps> {
  moveTargetFromSourceToDestination = (s: Stores, d: Stores) => {
    if (this.props[s] && this.props[d]) {
      const target = this.props[s]!.deleteItem();
      target && this.props[d]!.addTodo(target);
    }
  };

  render() {
    return (
      <div className="container">
        <Grid container spacing={5}>
          <Section
            title="todo"
            color="primary.main"
            store={this.props.todoStore}
            moveTargetFromSourceToDestination={
              this.moveTargetFromSourceToDestination
            }
          />
          <Section
            title="doing"
            color="secondary.main"
            store={this.props.doingStore}
            moveTargetFromSourceToDestination={
              this.moveTargetFromSourceToDestination
            }
          />
          <Section
            title="complete"
            color="info.main"
            store={this.props.completeStore}
            moveTargetFromSourceToDestination={
              this.moveTargetFromSourceToDestination
            }
          />
        </Grid>
      </div>
    );
  }
}

export default TodoList;
