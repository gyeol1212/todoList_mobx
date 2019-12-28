import React from "react";
import "./App.css";
import TodoList from "./TodoList";
import ThemeProvider from "./ThemeProvider";

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider>
        <TodoList />
      </ThemeProvider>
    </div>
  );
};

export default App;
