import React, {useReducer} from 'react';
import {Container} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./App.css";

import {TodoContext} from "./Context/TodoContext";
import todoReducer from "./Context/reducer";
import TodoForm from "./components/TodoForm";
import Todos from './components/Todos';
import Images from "./components/Images"
 
const App = () => {
  const [todos, dispatch] = useReducer(todoReducer, []);
  return (
    <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
      <Images />
        <h1>Todo App with context API</h1>
        <Todos />
        <TodoForm />
      </Container> 
    </TodoContext.Provider>
  )
}


export default App;
