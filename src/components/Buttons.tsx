import React from "react";
import { Button } from "@material-ui/core";
import { Stores } from "../stores/todoStore";

interface IProps {
  storeName: string;
  deleteItem: () => void | string;
  moveTargetFromSourceToDestination: (s: Stores, d: Stores) => void;
}

const Buttons: React.FC<IProps> = ({
  storeName,
  deleteItem,
  moveTargetFromSourceToDestination
}): JSX.Element => {
  return (
    <>
      {storeName === "todoStore" ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            moveTargetFromSourceToDestination("todoStore", "doingStore")
          }
        >
          doing
        </Button>
      ) : storeName === "doingStore" ? (
        <Button
          variant="outlined"
          color="primary"
          onClick={() =>
            moveTargetFromSourceToDestination("doingStore", "completeStore")
          }
        >
          complete
        </Button>
      ) : null}
      <Button variant="outlined" color="primary" onClick={deleteItem}>
        delete
      </Button>
    </>
  );
};

export default Buttons;
