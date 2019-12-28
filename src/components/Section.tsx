import React, { Component } from "react";
import { observer, inject } from "mobx-react";

import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import { Box } from "@material-ui/core";

import Todo from "./Todo";
import TodoStore, { Stores } from "../stores/todoStore";

interface IProps {
  color: string;
  title: string;
  store: TodoStore | undefined;
  moveTargetFromSourceToDestination: (s: Stores, d: Stores) => void;
}

@observer
class Section extends Component<IProps> {
  render() {
    const {
      store,
      color,
      title,
      moveTargetFromSourceToDestination
    } = this.props;
    console.log(store);
    return store ? (
      <Grid item xs={4}>
        <Box m={2} p={4} border={1} borderColor={color}>
          <p className="title">{title}</p>
          <TextField
            id="outlined-basic"
            label={title}
            variant="outlined"
            fullWidth
            className="input"
            margin="normal"
            value={store.inputValue}
            onChange={store.changeInputHandler}
            onKeyUp={store.submitInputValue}
          />
          {store.todos.map((todo: string, key: number) => (
            <Todo
              content={todo}
              key={key}
              hoverItem={store.hoverItem}
              targetItemIndex={store.targetItemIndex}
              index={key}
              storeName={`${title}Store`}
              deleteItem={store.deleteItem}
              moveTargetFromSourceToDestination={
                moveTargetFromSourceToDestination
              }
            />
          ))}
        </Box>
      </Grid>
    ) : null;
  }
}

export default Section;
