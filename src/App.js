import React from "react";
import Pagess from "./routes/index";
import "./App.css"
import Sidebar from "./components/navbar/navbar";



function App() {
  return (
    <>
      <div className="d-flex ">
        <Sidebar/>
        <Pagess/>
      </div>
    </>
  );
}

export default App;
