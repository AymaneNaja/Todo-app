import { useState } from "react";
import List from './components/List'
import Popup from "./components/Popup";
import TodoProvider from "./TodoContext";
import Nav from "./components/Nav/Nav";

function App() {
  const [popup,setpop]=useState(false)
  return (
    <>
    <TodoProvider>
        <Nav 
        popup={popup}
        setpop={setpop}
        />
        <Popup
          popup={popup}
          setpop={setpop}/>
        <List
          popup={popup}
          setpop={setpop}
        />
    </TodoProvider>
    </>
    
    );
}

export default App;
