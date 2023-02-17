import Mounting from "./components/Mounting"
import './App.css';
import Update from "./components/Updating"
import React from "react";
function App() {
  return (
    <React.StrictMode>
      <div className="App">
      {/* <Mounting/> */}
      <Update/>
    </div>
    </React.StrictMode>
  );
}

export default App;
