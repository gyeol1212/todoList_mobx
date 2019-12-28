import React, { Component } from "react";
import { Box, Button } from "@material-ui/core";
import TodoStore, { Stores } from "../stores/todoStore";
import { observer } from "mobx-react";
import Buttons from "./Buttons";

interface IProps {
  content: string;
  hoverItem: (targetItemIndex: number | undefined) => void;
  targetItemIndex: number | undefined;
  index: number;
  storeName: string;
  deleteItem: () => void | string;
  moveTargetFromSourceToDestination: (s: Stores, d: Stores) => void;
}

const Todo: React.FC<IProps> = ({
  content,
  hoverItem,
  targetItemIndex,
  index,
  storeName,
  moveTargetFromSourceToDestination,
  deleteItem
}): JSX.Element => {
  return (
    <Box
      className="todo"
      p={2}
      marginY={3}
      fontSize={18}
      onMouseOver={() => hoverItem(index)}
      onMouseLeave={() => hoverItem(undefined)}
    >
      {index !== targetItemIndex ? (
        content
      ) : (
        <Buttons
          storeName={storeName}
          deleteItem={deleteItem}
          moveTargetFromSourceToDestination={moveTargetFromSourceToDestination}
        />
      )}
    </Box>
  );
};

export default Todo;
