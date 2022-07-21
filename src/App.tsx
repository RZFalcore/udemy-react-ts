import React from "react";
import Todos from "./components/Todos";

function App() {
  const nav = ['Home', "About"]
  return <div>
    <h1>Typescript</h1>
    <Todos items={nav}/>
    </div>
}

export default App;
